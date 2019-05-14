import { path } from '@roseys/futils';
import { getTheme } from './getTheme';
import { stripNeg, isNeg, toNeg } from './utils';
import { isNil, isObject, isString, isNumber } from 'typed-is';

export const getUnitValue = (keyOrValue: any, fallbackObjOrValue?: any) => <
  P extends {}
>(
  obj: P,
) => {
  if (isString(keyOrValue) || isNumber(keyOrValue)) {
    const transform = (v: any) =>
      isNeg(keyOrValue) && (isString(v) || isNumber(v)) ? toNeg(v) : v;
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

export const safeGetThemeValue = (
  keyOrValue: any,
  fallbackObjOrValue?: any,
) => <P extends { theme?: any }>(obj: P) =>
  getUnitValue(keyOrValue, fallbackObjOrValue)(getTheme(obj));