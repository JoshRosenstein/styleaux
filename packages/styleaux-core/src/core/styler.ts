import { identity } from "@roseys/futils";
import {ObjectInterpolation3} from '../cssTypes2'
import * as CSS from '@styleaux/csstype'
import { isNumber, isBoolean, isString, isFunction } from "typed-is";
import { everyMedia } from "./everyMedia";
import { createWrap } from "../utils/wrap";
import {MediaKey} from './types'

//export type KeysOrString<T extends {}=never>=T extends [never] ? string : Extract<keyof T,string>
export type Getter<I=any, P extends {}=any>=(
  input: I,
  props?: P,
  mediaKey?: MediaKey
) => boolean | Getter<I,P> | null | undefined | string | number | {}

export type StylerOptions<P extends {}=any>={
  cssProp?: keyof CSS.Properties | CSS.StringHack
  getStyle?: (result: any, input?: any, props?: P, mediaKey?: MediaKey) => ObjectInterpolation3 | null | string | number
  getValue?: Getter
}


export function styler<I, P =unknown>({
  cssProp,
  getStyle = createWrap(cssProp),
  getValue = identity
}: StylerOptions<P>) {
  function getValues(
    get: Getter<I,P>,
    input:I,
    props:P,
    mediaKey?:MediaKey
  ) {
    const result = get(input, props, mediaKey);

    if (isBoolean(result)) {
      return null;
    }

    if (result === undefined && (isString(input) || isNumber(input))) {
      return input;
    }
    return isFunction(result)
      ? getValues(result, input, props, mediaKey)
      : result;
  }

  return (input: I, props: P, mediaKey?: MediaKey) => {

    return everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      result => getStyle(result, input, props, mediaKey )
    );
  };
}
