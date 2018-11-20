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

import {
  firstNonNil,
  falseToNull,
  iterateUntilResult,
  isResponsiveType,
  pipeIfDefined,
  cleanAndSort,
  safeMapValues,
} from '@styleaux/helper-plugin-utils'
import {isTruthy, isArray, isEmpty, isDefined, isString, isNil} from 'typed-is'
import {NestKey} from './constants'

const splitWhenNoSpace = (keys, delim) =>
  isString(keys)
    ? /\s/g.test(keys)
      ? [keys]
      : split(delim, keys)
    : toArray(keys)

export const matchBlock = value => props =>
  flow(
    value,
    reduce((accumulated, rulesForProp, propName) => {
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

export default matchBlock
