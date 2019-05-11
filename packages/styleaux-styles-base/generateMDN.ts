/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';
import axios from 'axios';
import cheerio from 'cheerio';
import TurndownService from 'turndown';
import props from 'mdn-data/css/properties.json';
import { toPascalCase } from '@roseys/futils';
import { camelCase, chunk, kebabCase, upperFirst } from 'lodash/fp';

const comments = require('@styleaux/csstype/comments');

const LERNAROOT = path.join(process.cwd(), '../../node_modules');

const COMPACTDATA = path.join(
  LERNAROOT,
  `mdn-browser-compat-data/css/properties`,
);

const TESTINI = require(path.join(COMPACTDATA, 'filter.json'));
if (!TESTINI) {
  console.log(LERNAROOT);
}
const DIR = process.cwd();
const TEMPLATE = path.join(DIR, 'gen-template.txt');
const TESTTEMPLATE = path.join(DIR, 'gen-test-template.txt');
const FOLDERNAME = 'mdn';
const UTILS_BASE_PATH = path.join(DIR, 'src', FOLDERNAME);

if (!fs.existsSync(UTILS_BASE_PATH)) {
  fs.mkdirSync(UTILS_BASE_PATH);
}

const cssProperties = props;
const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);

const utilTemplate = fs.readFileSync(TEMPLATE).toString();
const utilTestTemplate = fs.readFileSync(TESTTEMPLATE).toString();
const TYPE_DECLARATION_REGEX = /.*?type(.*?)(<|=).*/;
const TYPE_NAME_REGEX = /__TYPE_NAME__/g;
const PROPERTY_NAME_REGEX = /__PROPERTY_NAME__/g;
const PROPERTY_NAME_PASCAL_REGEX = /__PROPERTY_NAME_PASCAL__/g;
const PROPERTY_NAME_CAP_REGEX = /__PROPERTY_NAME_CAP__/g;
const INTERFACE_PROPERTY_NAME_REGEX = /__INTERFACE_PROPERTY_NAME__/g;
const INTERFACE_PROPERTY_COMMENT_TOKEN = '__INTERFACE_PROPERTY_COMMENT__';

const types = fs
  .readFileSync(
    path.resolve(
      process.cwd(),
      '../../node_modules/@styleaux/csstype/index.d.ts',
    ),
  )
  .toString()
  .split('\n')
  .map((line) =>
    TYPE_DECLARATION_REGEX.test(line)
      ? line.replace(/.*?type(.*?)(<|=).*/, '$1').trim()
      : undefined,
  )
  .filter(isString)
  .sort((a, b) => (a > b ? -1 : 1));

interface IUtilData {
  hyphenName: string;
  status: string;
  comment?: string;
  fullcomment?: string;
  interfacePropertyName: string;
  propertyName: string;
  typeName: string;
  directory: string;
  url: string;
}

function isString(val: string | undefined): val is string {
  return !!val;
}

async function mkDirNestedAsync(dirPath: string) {
  const parts = dirPath.split('/');
  let last = path.resolve(process.cwd(), './src');
  for (const part of parts) {
    try {
      const next = path.resolve(last, part);
      last = next;
      await mkdirAsync(next);
    } catch (e) {
      if (e.code !== 'EEXIST') {
        throw e;
      }
    }
  }
}

async function writeUtilFileAsync(data: IUtilData) {
  await mkDirNestedAsync(`${FOLDERNAME}/${data.directory}/__tests__`);
  const propertyName = data.propertyName;
  const source = utilTemplate
    .replace(TYPE_NAME_REGEX, data.typeName)
    .replace(PROPERTY_NAME_PASCAL_REGEX, toPascalCase(propertyName))
    .replace(PROPERTY_NAME_REGEX, propertyName)
    .replace(PROPERTY_NAME_CAP_REGEX, propertyName.toUpperCase())
    .replace(INTERFACE_PROPERTY_NAME_REGEX, data.interfacePropertyName)
    .replace(
      INTERFACE_PROPERTY_COMMENT_TOKEN,
      (data.fullcomment
        ? data.fullcomment
        : data.comment &&
          `/**
   * ${data.comment}
   *
   * @see ${data.url}
   */`) || '',
    );

  const testSource = utilTestTemplate
    .replace(PROPERTY_NAME_PASCAL_REGEX, toPascalCase(propertyName))
    .replace(PROPERTY_NAME_REGEX, propertyName)
    .replace(PROPERTY_NAME_CAP_REGEX, propertyName.toUpperCase());

  const utilPromise = writeFileAsync(
    path.resolve(UTILS_BASE_PATH, data.directory, `${data.propertyName}.ts`),
    source,
  );
  const utilTestPromise = writeFileAsync(
    path.resolve(
      UTILS_BASE_PATH,
      data.directory,
      '__tests__',
      `${data.propertyName}.test.ts`,
    ),
    testSource,
  );

  return Promise.all([utilPromise, utilTestPromise]);
}
const turndownService = new TurndownService();

turndownService.addRule('links', {
  filter: 'a',
  replacement(content: string) {
    return content;
  },
});

async function scrapeSummary(mdnurl: string) {
  async function scraper(url: string) {
    try {
      const result = await axios.get(url);
      const $ = result && cheerio.load(result.data);
      const summaryElement = $('#wikiArticle > p:not(:empty)')
        .first()
        .html();

      if (summaryElement) {
        return turndownService.turndown(summaryElement);
      }

      return '';
    } catch (ex) {
      console.warn(`Could not fetch summary for '${url}'`);
      return '';
    }
  }

  return await scraper(mdnurl);
}

function generateUtilsWithComments(dataToProcess: IUtilData[]) {
  const chunked = chunk(10, dataToProcess);

  return chunked.reduce(
    (acc, item) =>
      acc.then(async (data) => {
        const dataWithComments = await Promise.all(
          item.map(async (i) => {
            const fullcomment = comments[i.typeName];
            const comment = fullcomment
              ? undefined
              : await scrapeSummary(i.url);
            const utilData = { ...i, comment, fullcomment };
            await writeUtilFileAsync(utilData);
            // progress.increment(1);
            return utilData;
          }),
        );

        return data.concat(dataWithComments);
      }),
    Promise.resolve([] as IUtilData[]),
  );
}

async function generateUtils() {
  const utilsToGenerate = Object.keys(cssProperties)
    .map((key) => {
      const prop = cssProperties[key as keyof typeof cssProperties];
      let status = prop.status;
      let url = prop.hasOwnProperty('mdn_url')
        ? (prop as any).mdn_url
        : `https://developer.mozilla.org/en-US/docs/Web/CSS/${key}`;
      const directory = kebabCase(prop.groups[0].replace('CSS ', '').trim());
      const propertyName = camelCase(key);
      const hyphenName = key;
      const interfacePropertyName = upperFirst(propertyName);
      const keyLower = propertyName.toLowerCase();
      const typeName = types.find((type) => {
        const typeLower = type.toLowerCase();
        return (
          `${keyLower}propertycombined` === typeLower ||
          `${keyLower}property` === typeLower ||
          keyLower === typeLower
        );
      });

      try {
        const data = require(path.join(COMPACTDATA, `${key}.json`));

        if (data) {
          const maincompact = data.css.properties[key];
          const keys = Object.keys(maincompact);
          let compat = {} as any;

          if (keys.includes('__compat')) {
            compat = maincompact.__compat;
          } else {
            compat = maincompact[keys[0]].__compat;
          }

          if (compat.status.deprecated) {
            status = 'deprecated';
          }

          if (compat.mdn_url) {
            url = compat.mdn_url;
          }

          if (compat.support) {
            const chrome = compat.support.chrome;
            if (!Array.isArray(chrome) && chrome.version_added === false) {
              status = 'nonstandard';
            }
            url = compat.mdn_url;
          }
        }
      } catch {
        console.warn('compact data not found for', key);
        status = 'nonstandard';
      }

      return typeName
        ? {
            hyphenName,
            status,
            interfacePropertyName,
            propertyName,
            typeName,
            directory,
            url,
          }
        : undefined;
    })
    .filter(<T>(x: T | undefined): x is T => !!x)
    .filter(
      (x) => x && !['obsolete', 'nonstandard', 'deprecated'].includes(x.status),
    );

  await generateUtilsWithComments(utilsToGenerate);

  console.log('\nDone!');
}

export const createIndexFile = (fsPath: string) => {
  const isDir = isDirectory(fsPath);
  const indexFilePath = path.resolve(fsPath, 'index.ts');
  if (!isDir || fsPath.match(/test$/)) {
    return;
  }
  const files = fs.readdirSync(fsPath);
  const tsFiles = files
    .filter((file) => file.match(/\.ts$/))
    .map((file) => file.replace(/(\.d)?\.ts$/, ''));
  if (tsFiles.length === 0) {
    return;
  }
  const isIndexTsExit = fs.existsSync(indexFilePath);
  if (isIndexTsExit) {
    const currentIndexFileStr = fs.readFileSync(indexFilePath, 'utf8') || '';
    const needUpdateFiles = tsFiles.filter(
      (file) =>
        currentIndexFileStr.indexOf(file) === -1 && !file.match(/index$/),
    );
    if (needUpdateFiles.length === 0) {
      return;
    }
    const newIndexStr = getIndexStr(needUpdateFiles);
    fs.appendFileSync(indexFilePath, newIndexStr);
    // toast.success('成功更新index文件');
  } else {
    const indexStr = getIndexStr(tsFiles);
    fs.writeFileSync(indexFilePath, indexStr);
  }
};

function getIndexStr(tsFiles: string[]) {
  return `${tsFiles.map((file) => `export * from './${file}';`).join('\r')}\r`;
}

function createAllIndexFile() {
  const directories = getDirectories(UTILS_BASE_PATH);
  directories.forEach((folder) => createIndexFile(folder));
  const mainIndex = getIndexStr(
    directories.map((folder) => path.basename(folder)),
  );
  fs.writeFileSync(path.join(UTILS_BASE_PATH, 'index.ts'), mainIndex);
}

function isDirectory(source: string) {
  return fs.lstatSync(source).isDirectory();
}

const getDirectories = (source: string) =>
  fs
    .readdirSync(source)
    .map((name) => path.join(source, name))
    .filter(isDirectory);

async function run() {
  await generateUtils();
  await createAllIndexFile();
}

run();
