import { objOf } from '../utils/objOf';
import { MediaKey, Props } from './types';
import { identity } from '@roseys/futils';
import { everyMedia } from './everyMedia';
import { Style, StyleValue } from '@styleaux/types';
import { isNumber, isBoolean, isString, isFunction, isNil } from 'typed-is';
import {
  CreateStylesValueGetterPartial,
  CreateStylesValueGetter,
  CSSProp,
} from './types';
export type GetValue<I, P, R = StyleValue> = CreateStylesValueGetterPartial<
  I,
  P,
  R
>;

export type GetStyle<P> = (
  result: any,
  input?: any,
  props?: P,
  mediaKey?: MediaKey,
) => Style;

export interface StylerOptions<P extends Props, I> {
  cssProp?: CSSProp;
  getStyle?: GetStyle<P>;
  getValue?: GetValue<I, P>;
}

export function styler<I, P extends Props>({
  cssProp,
  getStyle = objOf<any>(cssProp),
  getValue = <any>identity,
}: StylerOptions<P, I>) {
  function getValues(get, input, props, mediaKey): StyleValue {
    const result = get(input, props, mediaKey);

    if (isBoolean(result)) {
      return null;
    }

    if (isNil(result) && (isString(input) || isNumber(input))) {
      return input;
    }
    return isFunction(result)
      ? getValues(result, input, props, mediaKey)
      : result;
  }

  return ((input: I, props: P, mediaKey: MediaKey) => {
    return everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      (result) => getStyle(result, input, props, mediaKey),
    );
  }) as CreateStylesValueGetter<I, P>;
}
