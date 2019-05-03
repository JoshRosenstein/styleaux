import { isNil } from 'typed-is';
import { SimpleStyles } from '@styleaux/types';
//https://github.com/styled-components/polished/blob/master/src/helpers/directionalProperty.js

const positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property: string, position: string) {
  if (!property) {
    return position.toLowerCase();
  }
  const joinedProperty = property.replace(/([a-z])([A-Z])/g, `$1${position}$2`);
  return property === joinedProperty
    ? `${property}${position}`
    : joinedProperty;
}

export function directionalProperty<V>(
  property: string,
  top: V,
  right?: V,
  bottom = top,
  left = right,
): SimpleStyles {
  return [top, right, bottom, left].reduce((acc, v, i) => {
    if (isNil(v)) {
      return acc;
    }
    acc[generateProperty(property, positionMap[i])] = v;
    return acc;
  }, {});
}

export const directionalPropertyFactory = <V>(property: string) => (
  top: V,
  right?: V,
  bottom = top,
  left = right,
) => directionalProperty(property, right, bottom, left);
