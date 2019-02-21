import {isResponsiveType} from '../utils'
import {isTruthy} from 'typed-is'
import {responsiveReducer} from './responsiveHelpers'
import {ToMq} from './types'
/**
 * @requires toMq
 */
export enum OPTIONSKEYS {
  breakpointsKey = 'responsive.breakpointsKeyInTheme',
}

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
}

export const createResponsive = (
  toMq: ToMq,
  defaultBreakPoints: any,
  transformStyle = (x: any) => x,
) => {
  return ({
    value,
    defaultValue,
    cssProp,
    transformer = transformStyle,
    breakpoints = defaultBreakPoints,
  }) => {
    // / run default Value thru transformer ??
    const defaultResult = defaultValue
      ? cssProp
        ? {[cssProp]: defaultValue}
        : defaultValue
      : {}

    // / if its not responsive value type, return
    if (!isResponsiveType(value)) {
      return !isTruthy(value)
        ? defaultResult
        : cssProp
        ? {[cssProp]: transformer(value)}
        : transformer(value)
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
