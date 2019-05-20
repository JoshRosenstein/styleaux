import { path } from '@roseys/futils';
import { getTheme } from './getTheme';
import { stripNeg, isNeg, toNeg } from './utils';
import { isNil, isObject, isString, isNumber } from 'typed-is';

const isStringOrNumber = (v: unknown): v is string | number =>
  isString(v) || isNumber(v);

export const getUnitValue = (keyOrValue: any, fallbackObjOrValue?: any) => <
  P extends {}
>(
  obj: P,
) => {
  if (isStringOrNumber(keyOrValue)) {
    const transform = (v: any) =>
      isNeg(keyOrValue) && isStringOrNumber(v) ? toNeg(v) : v;
    const strippedNeg = stripNeg(keyOrValue);
    let value = transform(path(strippedNeg as any, obj));

    if (isNil(value)) {
      if (!isNil(fallbackObjOrValue)) {
        if (isObject(fallbackObjOrValue)) {
          value = transform(path(strippedNeg as any, fallbackObjOrValue));
        } else {
          value = fallbackObjOrValue;
        }
      }
    }

    return isNil(value) ? keyOrValue : value;
  }
  return keyOrValue;
};

export const getThemeUnitValue = (
  keyOrValue: any,
  fallbackObjOrValue?: any,
) => <P extends { theme?: any }>(obj: P) =>
  getUnitValue(keyOrValue, fallbackObjOrValue)(getTheme(obj));
