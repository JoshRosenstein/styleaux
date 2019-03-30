import { identity } from "@roseys/futils";
import {CSSPropertiesKeys} from '../cssTypes'
import { isNumber, isBoolean, isString, isFunction } from "typed-is";
import { everyMedia } from "./everyMedia";
import { createWrap } from "../utils/wrap";


//export type KeysOrString<T extends {}=never>=T extends [never] ? string : Extract<keyof T,string>
export type Getter=(
  input: any,
  props?: any,
  mediaKey?: string
) => boolean | Function | null | undefined | string | number | {}

export type StylerOptions={
  cssProp?: CSSPropertiesKeys;
  getStyle?: (result: any, input?: any, props?: any, mediaKey?: string) => any;
  getValue?: Getter
}


export function styler<T>({
  cssProp,
  getStyle = createWrap(cssProp),
  getValue = identity
}: StylerOptions) {
  function getValues(
    get: Getter,
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
