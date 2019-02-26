import {isObjectOrArray} from './utils'
import {responsiveReducer} from './responsiveHelpers'
import {isTrue, isFalse, isBoolean, isNil} from 'typed-is'

export type responsiveBoolOptions = {
  /**
   *  BOOLEAN OR RESPONSIVETYPE BOOL
   */
  value: any
  /**
   * STYLE WHEN TRUE
   */
  T: string | number
  /**
   * STYLE WHEN FALSE
   */
  F?: string | number
  /**
   * BOOLEAN OR RESPONSIVETYPE BOOL WHEN VALUE IS UNDEFINED
   */
  defaultValue?: any
  /**
   * CSS SELECTOR
   */
  cssProp: string
  /**
   * Optional function to perform on T or F styles
   */
  transformer?: Function
  /**
   * BREAKPOINGS
   */
  breakpoints?: any
}
export const createResponsiveBool = (toMq: any, defaultBreakPoints: any) => {
  return function responsiveBool({
    value,
    T: trueValue,
    F: falseValue,
    defaultValue,
    cssProp,
    transformer = (v: any) => v,
    breakpoints = defaultBreakPoints,
  }: responsiveBoolOptions) {
    if (isNil(value)) {
      value = defaultValue
    }

    if (!isObjectOrArray(value)) {
      if (isBoolean(value)) {
        const v = isTrue(value)
          ? transformer(trueValue)
          : isFalse(value)
          ? transformer(falseValue)
          : false

        return v ? {[cssProp]: v} : {}
      }

      return {}
    }

    const computedValFn = (currentVal: any) =>
      isTrue(currentVal)
        ? transformer(trueValue)
        : isFalse(currentVal)
        ? transformer(falseValue)
        : null

    return responsiveReducer(value, breakpoints, cssProp, computedValFn, toMq)
  }
}

export default createResponsiveBool
