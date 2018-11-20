// @flow
import {always, prop} from '@roseys/futils'
import {isResponsiveType} from '@styleaux/helper-plugin-utils'
import {isTruthy, isPlainObject, isArray} from 'typed-is'
import {Dict, Maybe} from '@styleaux/helper-plugin-utils'
import {responsiveReducer} from './responsiveHelpers'
import {Breakpoints, ToMq} from './types'
import {isObjectOrArray} from './utils'
/**
 * @requires toMq
 */
export enum OPTIONSKEYS {
  breakpointsKey = 'responsive.breakpointsKeyInTheme',
}
export type Breakpoints = Dict<number | string> | (number | string)[]

export type Options = {
  [index: string]: any
  defaultBreakPoints: Breakpoints
}

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
}
type ValueTypes<T> = T extends Dict<number | string>
  ? Partial<Record<keyof T | 'default', number | string>> | (number | string)[]
  : T

export const createResponsive = <B extends Breakpoints>(
  toMq: ToMq,
  defaultBreakPoints: B,
  transformStyle = x => x,
) => {
  return <T extends string | number | Dict<any> | Array<any>>({
    value,
    defaultValue,
    cssProp,
    transformer = transformStyle,
    breakpoints = defaultBreakPoints,
  }: {
    value: Maybe<ValueTypes<B> | string | number> | undefined
    defaultValue?: string | number | Breakpoints
    transformer?: Function
    cssProp: string
    breakpoints?: Breakpoints
  }) => {
    // / run default Value thru transformer ??
    const defaultResult = defaultValue ? {[cssProp]: defaultValue} : {}

    // / if its not responsive value type, return
    if (!isResponsiveType(value)) {
      return !isTruthy(value) ? defaultResult : {[cssProp]: transformer(value)}
    }

    return responsiveReducer(
      value,
      breakpoints,
      cssProp,
      transformer,
      toMq,
      defaultResult,
    )
  }
}

export default createResponsive
