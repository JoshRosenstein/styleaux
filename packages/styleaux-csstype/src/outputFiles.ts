import {
  DeclarableType,
  declarations,
  IGenerics,
  interfaces,
  isAliasProperty,
  toPropertyDeclarationName,
} from './declarator';
import { Type } from './typer';

const EOL = '\n';
const COMMADELIM = ', ';

export default () => ({
  typescript: typescript(),
});
const INDEXFILE = 'index';

const createFilePath = (name: string) => `export * from './${name}'`;
function typescript() {
  //  let interfacesOutput2 = 'export type StringHack=(string & { zz_IGNORE_ME?: never })';
  const commentMap = {} as { [index: string]: string };
  const startIndex = 'export type StringHack=(string & { zz_IGNORE_ME?: never })';

  const filesMap = {} as {
    [index: string]: string;
  };

  for (const item of interfaces) {
    let imports = [] as string[];
    let interfacesOutput = '';
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }
    let isExtension = false;
    const extendNames = item.extends.map(extend => extend.name);
    const extendList = item.extends.map(extend => extend.name + stringifyGenerics(extend.generics, true)).join(', ');
    imports.push(importGenerics(extendNames, item.generics));

    interfacesOutput += 'export interface ' + item.name + stringifyGenerics(item.generics);
    //f//ilesMap[INDEXFILE] = filesMap[INDEXFILE] + EOL + createFilePath(item.name);
    if (extendList) {
      isExtension = true;
      interfacesOutput += ` extends ${extendList}`;
    }

    interfacesOutput += '{' + EOL;

    for (const property of item.properties) {
      if (property.comment) {
        if (!isExtension && !commentMap[toPropertyDeclarationName(property.name)]) {
          commentMap[toPropertyDeclarationName(property.name)] = property.comment;
        }

        interfacesOutput += property.comment + EOL;
      }

      if (isAliasProperty(property)) {
        const generics = stringifyGenerics(property.generics, true);
        imports.push(property.alias.name);
        interfacesOutput += `${JSON.stringify(property.name)}?: ${
          item.fallback
            ? `${property.alias.name + generics} | ${property.alias.name + generics}[];`
            : `${property.alias.name + generics};`
        }`;
      } else {
        const value = stringifyTypes(property.type);
        interfacesOutput += `${JSON.stringify(property.name)}?: ${
          item.fallback ? `${value} | ${value}[];` : `${value};`
        }`;
      }

      interfacesOutput += EOL;
    }

    interfacesOutput += '}';
    const flattenimports = [
      ...new Set(
        imports
          .filter(Boolean)
          .join(COMMADELIM)
          .split(COMMADELIM),
      ),
    ].join(COMMADELIM);
    filesMap[item.name] = (flattenimports ? `import {${flattenimports}} from './index'` : '') + EOL + interfacesOutput;
    // filesMap[INDEXFILE] = filesMap[INDEXFILE] + EOL + createFilePath(item.name);
  }

  //let declarationsOutput = '';
  for (const declaration of declarations.values()) {
    let imports = [] as string[];
    let declarationsOutput = '';
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    if (commentMap.hasOwnProperty(declaration.name)) {
      declarationsOutput += commentMap[declaration.name] + EOL;
    }
    if (declaration.export) {
      declarationsOutput += 'export ';
    }
    imports.push(importifyGenerics(declaration.generics));
    imports.push(importifyTypes(declaration.types));
    declarationsOutput += `type ${declaration.name + stringifyGenerics(declaration.generics)} = ${stringifyTypes(
      declaration.types,
    ) + EOL}`;
    const flattenimports = [
      ...new Set(
        imports
          .filter(Boolean)
          .join(COMMADELIM)
          .split(COMMADELIM),
      ),
    ].join(COMMADELIM);

    filesMap[declaration.name] =
      (flattenimports ? `import {${flattenimports}} from './index'` : '') + EOL + declarationsOutput;
  }
  filesMap[INDEXFILE] =
    startIndex +
    EOL +
    Object.keys(filesMap)
      .map(file => createFilePath(file))
      .join(EOL);
  return filesMap; //interfacesOutput + EOL + EOL + declarationsOutput;
}

function stringifyTypes(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    types = [types];
  }
  const res = types
    .map(type => {
      switch (type.type) {
        case Type.String:
          return 'StringHack';
        case Type.Number:
          return 'number';
        case Type.StringLiteral:
          return JSON.stringify(type.literal);
        case Type.NumericLiteral:
          return type.literal;
        case Type.Alias:
          return type.name + stringifyGenerics(type.generics, true);
        case Type.Length:
          return 'TLength';
      }
    })
    .join(' | ');

  return res === 'StringHack' ? 'string' : res;
}

function importifyTypes(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    types = [types];
  }
  const res = types
    .map(type => {
      switch (type.type) {
        case Type.String:
          return 'StringHack';
        case Type.Alias:
          return type.name; //+ stringifyGenerics(type.generics, true);
      }
    })
    .filter(Boolean)
    .join(COMMADELIM);

  return res === 'StringHack' ? 'StringHack' : res;
}

function stringifyGenerics(items: IGenerics[] | undefined, ignoreDefault = false) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, defaults }) => (defaults && !ignoreDefault ? `${name} = ${defaults}` : name))
    .join(', ')}>`;
}

function importifyGenerics(items: IGenerics[] | undefined) {
  if (!items || items.length === 0) {
    return '';
  }
  const ds = items
    .map(({ defaults }) => (defaults && defaults.search('StringHack') !== -1 ? `StringHack` : ''))
    .filter(Boolean)
    .filter(x => !['string', 'number'].includes(x))
    .join(COMMADELIM);

  return ds;
}

function importGenerics(extendNames: string[], items: IGenerics[] | undefined) {
  if (!items || items.length === 0) {
    return '';
  }
  const ds = items
    .map(({ defaults }) => (defaults && defaults.search('StringHack') !== -1 ? `StringHack` : ''))
    .filter(Boolean);

  const extended = extendNames.filter(Boolean);
  const all = [...ds, ...extended].join(COMMADELIM);

  return all;
}
