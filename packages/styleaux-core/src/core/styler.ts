import { identity } from "@roseys/futils";
import { CSSObj, Styles } from '../cssTypes'
import { isNumber, isBoolean, isString, isFunction, isNil } from "typed-is";
import { everyMedia } from "./everyMedia";
import { CreateStylesValueGetterPartial,CreateStylesValueGetter, CSSProp } from './types'
import { MediaKey } from './types'
import { objOf } from '../utils/objOf'


//https://github.com/Microsoft/TypeScript/issues/10957
export type GetValue<I, P> = CreateStylesValueGetterPartial<I, P, Styles>


export type GetStyle<P> = (result: any, input?: any, props?: P, mediaKey?: MediaKey) => CSSObj


export interface StylerOptions<P extends {} = any, I = any> {
  cssProp?: CSSProp
  getStyle?: GetStyle<P>
  getValue?: GetValue<I, P>
}


export function styler<I = any, P extends {} = any>({
  cssProp,
  getStyle = objOf(cssProp as any),
  getValue = identity as any
}: StylerOptions<P, I>) {
  function getValues(
    get,
    input,
    props,
    mediaKey
  ): Styles {
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
      result => getStyle(result, input, props, mediaKey)
    )
  }) as CreateStylesValueGetter<I, P>

}
