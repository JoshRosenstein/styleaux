/// TODO create a common FN to reduce copy paste

import {
  reduce,
  mergeDeepRight,
  prop,
  flow,
  when,
  mergeAllDeepRight,
  simplyEquals,
  reject,
  either,
  all,
  contains,
  split,
  toArray,
  whenFunctionCallWith,
  props as getprops,
} from '@roseys/futils'

import {cleanAndSort, safeMapValues} from '../utils'
import {isTruthy, isArray, isEmpty, isString} from 'typed-is'

const splitWhenNoSpace = (keys, delim) =>
  isString(keys)
    ? /\s/g.test(keys)
      ? [keys]
      : split(delim, keys)
    : toArray(keys)

export const matchBlockArr = (value: any[][]) => props =>
  flow(
    value,
    reduce((accumulated, [propName, rulesForProp], idx) => {
      let isMatch = false
      let value
      if (contains(',', propName)) {
        value = flow(
          splitWhenNoSpace(propName, ','),
          x => getprops(x, props),
        )
        isMatch = all(isTruthy, value)
        // isTruthy(prop(propName, props))
      } else {
        value = prop(propName, props)
        isMatch = isTruthy(value)
      }
      return !isMatch
        ? accumulated
        : flow(
            rulesForProp,
            // logger('rulesForProp'),
            // Call if function on parent Level BLOCK LEVEL
            whenFunctionCallWith(value, props),
            whenFunctionCallWith(props),
            // /On indivdual cssProp Level
            //@ts-ignore
            safeMapValues(whenFunctionCallWith(props)),
            // logger('isArray', v => ({ accum: accumulated, value: v, isArray: isArray(v) })),
            when(isArray, mergeAllDeepRight),
            // /Keep Nulls, tells to overide previous styled
            reject(either(simplyEquals(undefined), isEmpty)),
            mergeDeepRight(accumulated),
          )
    }, {}),
    // / compact,
    cleanAndSort,
  )

export default matchBlockArr
