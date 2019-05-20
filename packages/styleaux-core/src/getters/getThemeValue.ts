import { Props, MediaKey } from '../core/types';
import { getDefaultKey } from './getDefaultKey';
import { lookUpTransformNegative } from './utils';
import { getThemePathOr } from './getThemePathOr';
import { identity, mapObj } from '@roseys/futils';
import { isPlainObject, isNumeric, isFunction, isDefined } from 'typed-is';

export function getThemeValue(themeKey: string, transformer?: any) {
  const isTransformValue = isFunction(transformer);

  if (!isTransformValue) {
    transformer = identity;
  }

  return (input: any, defaultValue?: any, mediaKey?: MediaKey) => (
    props: Props,
  ) => {
    const valueKey = input === true ? getDefaultKey(themeKey)(props) : input;

    const themeData = getThemePathOr(themeKey)(props);
    const [transform, themeValue] = lookUpTransformNegative(
      valueKey,
      themeData,
      transformer,
    );

    if (
      isDefined(mediaKey) &&
      !isNumeric(mediaKey) &&
      Object(themeValue).hasOwnProperty(mediaKey)
    ) {
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
