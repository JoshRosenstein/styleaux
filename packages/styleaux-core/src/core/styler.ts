import { identity } from "@roseys/futils";
import { CSSObj } from '../cssTypes'
import * as CSS from '@styleaux/csstype'
import { isNumber, isBoolean, isString, isFunction, isNil } from "typed-is";
import { everyMedia } from "./everyMedia";

import { MediaKey } from './types'
import { objOf } from '../utils/objOf'

//export type KeysOrString<T extends {}=never>=T extends [never] ? string : Extract<keyof T,string>

type GetterReturnType = null | undefined | string | number | boolean | {}

//https://github.com/Microsoft/TypeScript/issues/10957
type AnyGetValue = (...args: any[]) => GetterReturnType


//https://github.com/Microsoft/TypeScript/issues/10957
export type GetValue<I, P> = ((
  input: I,
) => I | GetterReturnType | AnyGetValue) | ((
  input: I,
  props: P,
) => I | GetterReturnType | AnyGetValue) | ((
  input: I,
  props: P,
  mediaKey: MediaKey
) => I | GetterReturnType | AnyGetValue)

type cssProp = keyof CSS.Properties | CSS.StringHack

export interface StylerOptions<P extends {} = any, I = any> {
  cssProp?: cssProp | cssProp[]
  getStyle?: (result: any, input?: any, props?: P, mediaKey?: MediaKey) => CSSObj | null | string | number
  getValue?: GetValue<I, P>
}


export function styler<I = any, P extends {} = any>({
  cssProp,
  getStyle = objOf(cssProp as any),
  getValue = identity
}: StylerOptions<P, I>) {
  function getValues(
    get: typeof getValue,
    input: I,
    props: P,
    mediaKey: MediaKey
  ) {
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

  return (input: I, props: P, mediaKey: MediaKey) => {

    return everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      result => getStyle(result, input, props, mediaKey)
    );
  };
}
