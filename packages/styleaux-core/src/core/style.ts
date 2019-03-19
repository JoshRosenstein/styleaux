import { identity } from "@roseys/futils";
import { CSSPropertyKeys } from "../types";
import { isNumber, isBoolean, isString, isFunction } from "typed-is";
import { everyMedia } from "./everyMedia";
import { createWrap } from "../utils/wrap";


export function style<T>({
  cssProp,
  getStyle = createWrap(cssProp),
  getValue = identity
}: {
  cssProp?: CSSPropertyKeys;
  getStyle?: (result: any, input?: any, props?: any, mediaKey?: string) => any;
  getValue?: (input: any, props?: any, mediaKey?: string) => any;
}) {
  function getValues(
    get: (
      input: any,
      props?: {},
      mediaKey?: string
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

  return (input: T, props: {}, mediaKey?: string) => {
    return everyMedia(
      props,
      getValues(getValue, input, props, mediaKey),
      result => getStyle(result, input, props, mediaKey)
    );
  };
}
