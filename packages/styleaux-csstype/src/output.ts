/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as fs from 'fs';
import * as path from 'path';
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Type } from './typer';
import {
  DeclarableType,
  declarations,
  toPropertyDeclarationName,
  IGenerics,
  interfaces,
  isAliasProperty,
} from './declarator';
const EOL = '\n';
const STRINGHACK = 'StringHack';
export default () => ({
  flow: flow(),
  typescript: typescript(),
});

function flow() {
  let interfacesOutput = 'export type StringHack= string';
  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = item.extends
      .map((extend) => extend.name + stringifyGenerics(extend.generics, true))
      .join(' & ');
    interfacesOutput += 'export type ';
    interfacesOutput += item.name + stringifyGenerics(item.generics);
    interfacesOutput += ' = ' + extendList;

    if (item.properties.length > 0) {
      if (extendList) {
        interfacesOutput += ' & ';
      }

      interfacesOutput += '{' + EOL;

      for (const property of item.properties) {
        if (isAliasProperty(property)) {
          const generics = stringifyGenerics(property.generics, true);
          interfacesOutput += `${JSON.stringify(property.name)}?: ${
            item.fallback
              ? `${property.alias.name + generics} | ${property.alias.name +
                  generics}[],`
              : property.alias.name + generics + ','
          }`;
        } else {
          const value = stringifyTypes(property.type);
          interfacesOutput += `${JSON.stringify(property.name)}?: ${
            item.fallback ? `${value} | ${value}[],` : value + ','
          }`;
        }

        interfacesOutput += EOL;
      }

      interfacesOutput += '}';
    }
  }

  let declarationsOutput = '';
  for (const declaration of declarations.values()) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    declarationsOutput += ' ';

    if (declaration.export) {
      declarationsOutput += 'export ';
    }

    declarationsOutput += `type ${declaration.name +
      stringifyGenerics(declaration.generics, true)} = ${stringifyTypes(
      declaration.types,
    ) + EOL}`;
  }

  return `// @flow ${EOL +
    interfacesOutput +
    EOL +
    EOL +
    declarationsOutput +
    EOL}`;
}

function typescript() {
  let interfacesOutput =
    'export type StringHack=(string & { zz_IGNORE_ME?: never })';
  let commentMap = {} as { [index: string]: string };

  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }
    let isExtension = false;
    const extendList = item.extends
      .map((extend) => extend.name + stringifyGenerics(extend.generics, true))
      .join(', ');
    interfacesOutput +=
      'export interface ' + item.name + stringifyGenerics(item.generics);

    if (extendList) {
      isExtension = true;
      interfacesOutput += ` extends ${extendList}`;
    }

    interfacesOutput += '{' + EOL;

    for (const property of item.properties) {
      if (property.comment) {
        if (
          !isExtension &&
          !commentMap[toPropertyDeclarationName(property.name)]
        ) {
          commentMap[toPropertyDeclarationName(property.name)] =
            property.comment;
        }

        interfacesOutput += property.comment + EOL;
      }

      if (isAliasProperty(property)) {
        const generics = stringifyGenerics(property.generics, true);

        interfacesOutput += `${JSON.stringify(property.name)}?: ${
          item.fallback
            ? `${property.alias.name + generics} | ${property.alias.name +
                generics}[];`
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
  }

  let declarationsOutput = '';
  for (const declaration of declarations.values()) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    if (commentMap.hasOwnProperty(declaration.name)) {
      declarationsOutput += commentMap[declaration.name] + EOL;
    }
    if (declaration.export) {
      declarationsOutput += 'export ';
    }
    const types = stringifyTypes(declaration.types);
    const generics = stringifyGenerics(declaration.generics);
    const endswithProperty = declaration.name.endsWith('Property');
    const hasStringHack = types.includes(STRINGHACK);

    if (endswithProperty && hasStringHack) {
      declarationsOutput += `type ${declaration.name +
        generics} = ${types.replace(
        STRINGHACK,
        generateCustomStringHack(declaration.name),
      ) + EOL}`;
    } else {
      declarationsOutput += `type ${declaration.name + generics} = ${types +
        EOL}`;
    }
  }
  fs.writeFileSync(
    path.join(process.cwd(), 'comments.json'),
    JSON.stringify(commentMap),
  );
  return interfacesOutput + EOL + EOL + declarationsOutput;
}

function generateCustomStringHack(name: string) {
  return `string &{ zz_${name}?: never } `;
}

function stringifyTypes(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    types = [types];
  }
  const res = types
    .map((type) => {
      switch (type.type) {
        case Type.String:
          return STRINGHACK;
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

  return res === STRINGHACK ? 'string' : res;
}

function stringifyGenerics(
  items: IGenerics[] | undefined,
  ignoreDefault = false,
) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, defaults }) =>
      defaults && !ignoreDefault ? `${name} = ${defaults}` : name,
    )
    .join(', ')}>`;
}
