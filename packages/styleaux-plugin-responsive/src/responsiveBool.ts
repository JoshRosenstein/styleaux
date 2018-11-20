import {isObjectOrArray} from './utils'
import {responsiveReducer} from './responsiveHelpers'
import {isTrue, isFalse, isBoolean, isNil} from 'typed-is'
import {Breakpoints, BreakPointKeysOFT, ToMq} from './types'
import {Maybe} from '@styleaux/helper-plugin-utils'

export const createResponsiveBool = <B extends Breakpoints>(
  toMq: ToMq,
  defaultBreakPoints: B,
) => {
  return function responsiveBool({
    value,
    T: trueValue,
    F: falseValue,
    defaultValue,
    cssProp,
    transformer = v => v,
    breakpoints = defaultBreakPoints,
  }: {
    value: Maybe<BreakPointKeysOFT<B, boolean> | boolean>
    T: string | number
    F?: string | number
    defaultValue?: BreakPointKeysOFT<B, boolean> | boolean
    cssProp: string
    transformer?: Function
    breakpoints?: B
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
