import {isObjectOrArray} from './utils'
import {responsiveReducer} from './responsiveHelpers'
import {isTrue, isFalse, isBoolean, isNil} from 'typed-is'

export const createResponsiveBool = (toMq, defaultBreakPoints) => {
  return function responsiveBool({
    value,
    T: trueValue,
    F: falseValue,
    defaultValue,
    cssProp,
    transformer = v => v,
    breakpoints = defaultBreakPoints,
  }: {
    value
    T: string | number
    F?: string | number
    defaultValue?
    cssProp: string
    transformer?: Function
    breakpoints?
  }) {
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

    const computedValFn = currentVal =>
      isTrue(currentVal)
        ? transformer(trueValue)
        : isFalse(currentVal)
        ? transformer(falseValue)
        : null

    return responsiveReducer(value, breakpoints, cssProp, computedValFn, toMq)
  }
}

export default createResponsiveBool
