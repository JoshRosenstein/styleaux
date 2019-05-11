import { getDefault } from './getDefault';
import { lookUpTransformNegative } from './utils';
import { getThemePathOr } from './getThemePathOr';
import { isPlainObject, isNumeric } from 'typed-is';
import { isFunction, identity, mapObj } from '@roseys/futils';

export function getThemeValue(themeKey, transformValue?: any) {
  const isTransformValue = isFunction(transformValue);

  if (!isTransformValue) {
    transformValue = identity;
  }

  return (input, defaultValue, mediaKey) => (props) => {
    const valueKey = input === true ? getDefault(themeKey)(props) : input;

    const themeData = getThemePathOr(themeKey)(props);
    const [transform, themeValue] = lookUpTransformNegative(
      valueKey,
      themeData,
      transformValue,
    );

    if (!isNumeric(mediaKey) && Object(themeValue).hasOwnProperty(mediaKey)) {
      return transform(themeValue[mediaKey]);
    }

    if (isTransformValue && isPlainObject(themeValue)) {
      return mapObj(themeValue, (value, key) => ({
        [key]: transform(value),
      }));
    }

    return themeValue == null ? defaultValue : transform(themeValue);
  };
}
