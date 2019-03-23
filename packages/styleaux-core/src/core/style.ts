import { identity } from "@roseys/futils";
import { CSSPropertyKeys } from "../types";
import { isNumber, isBoolean, isString, isFunction } from "typed-is";
import { everyMedia } from "./everyMedia";
import { createWrap } from "../utils/wrap";
import {ResponsiveProp} from './types'

export type KeysOrstrong<T extends {}=never>=T extends [never] ? string : Extract<keyof T,string>

export function style<T>({
  cssProp,
  getStyle = createWrap(cssProp),
  getValue = identity
}: {
  cssProp?: CSSPropertyKeys;
  getStyle?: (result: any, input?: any, props?: any, mediaKey?: string) => any;
  getValue?: (input: any, props?: any, mediaKey?: string) => any;
}) {
  function getValues<Media1 extends {}=never>(
    get: (
      input: any,
      props?: {},
      mediaKey?: KeysOrstrong<Media1>
    ) => boolean | Function | null | undefined | string | number,
    input,
    props,
    mediaKey
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

  return <Media extends {}=never,M extends string =KeysOrstrong<Media>>(input: ResponsiveProp<T,Media>, props: {}, mediaKey?: M) => {
    return everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      result => getStyle(result, input, props, mediaKey)
    );
  };
}
