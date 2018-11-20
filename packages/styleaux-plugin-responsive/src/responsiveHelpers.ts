import {
  values,
  prop,
  objOf,
  mergeDeepRight,
  mapValues,
  when,
  noop,
} from '@roseys/futils'
import {
  arrToObj,
  isResponsiveType,
  AnyDict,
} from '@styleaux/helper-plugin-utils'
import {isBoolean, isNil, isArray, isPlainObject, isNumber} from 'typed-is'
//import * as invariant from 'invariant'
import {Dict, EmptyDict, Maybe} from '@styleaux/helper-plugin-utils'
export const nonBoolsToNil = mapValues(when(x => !isBoolean(x), noop))
export const boolsToNil = mapValues(when(isBoolean, noop))
export type Breakpoints = Dict<number | string> | (number | string)[]
declare function parseFloat(numberOrString: number | string): number

export const getBreakPoints = <T>(
  breakpoints: Dict<T> | Array<T>,
  breakPointsFromTheme: Breakpoints,
): Breakpoints => {
  const Dummy = 0

  const switchValue =
    (isArray(breakPointsFromTheme) ? 1 : -1) + (isArray(breakpoints) ? 10 : -10)

  if (isArray(breakPointsFromTheme)) {
    if (isArray(breakpoints)) {
      return [Dummy, ...breakPointsFromTheme]
    }
    throw Error(
      "[STYLEAUX:Responsive]You are using Object Literals for responsive props when your BP's is an Array",
    )
  } else {
    if (isPlainObject(breakPointsFromTheme)) {
      if (isPlainObject(breakpoints)) {
        const b = {default: Dummy, ...breakPointsFromTheme}
        return {default: Dummy, ...breakPointsFromTheme}
      }
      return arrToObj([Dummy, ...Object.values(breakPointsFromTheme)])
    }
  }
  return breakPointsFromTheme
}

//   console.log(switchValue);

// switch (switchValue) {
//   case 11: // /both are arrays
//     return [Dummy, ...breakPointsFromTheme]

//   case -11: // /both are Objects
//     return {default: Dummy, ...breakPointsFromTheme}

//   case 9: // / Theme is Object
//     return arrToObj([Dummy, ...values(breakPointsFromTheme)])

//   default:
//     // /9 Valueprop is object but theme BP is array throw error
//     invariant(
//       false,
//       "[STYLEAUX:Responsive]You are using Object Literals for responsive props when your BP's is an Array",
//     )
// }

//   return breakPointsFromTheme
// }
type ValueTypes<T> = T extends Dict<number | string>
  ? Partial<Record<keyof T | 'default', number | string>> | (number | string)[]
  : never

export const responsiveReducer = <
  T extends
    | Dict<Maybe<string | number | boolean>>
    | Array<Maybe<string | number | boolean>>
>(
  value: T,
  breakPointsFromTheme: Breakpoints,
  css: string,
  tranformer,
  toMq: (x: any) => string,
  init = {},
) => {
  // if (!isResponsiveType(value)) {
  //   value = [value]
  // }

  const transFormedBps = getBreakPoints(value, breakPointsFromTheme)

  const getBp = (x: string) => prop(x, transFormedBps)

  const createParent = css
    ? (isDefault: boolean, bpVal) => (isDefault ? css : [toMq(bpVal), css])
    : (isDefault: boolean, bpVal) => (isDefault ? [] : toMq(bpVal))

  // /sort Breakpoints

  const sorted = Object.keys(value)
    .sort((a, b) => parseFloat(getBp(a)) - parseFloat(getBp(b)))
    .reduce((acc, key) => {
      acc[key] = value[key]
      return acc
    }, {})

  const ret =
    sorted &&
    Object.keys(sorted).reduce((acc, bpKey) => {
      const bpVal = getBp(bpKey)
      if (isNil(bpVal) && bpKey !== 'default') {
        console.warn(
          `Styler could not find a match for breakPoints matching ${bpKey} in ${css} style with `,
        )
        return acc
      }

      const currentVal = value[bpKey]
      const isDefault =
        bpKey === '0' || bpKey === 'default' || bpVal === 0 || bpVal === '0'
      const computedVal = tranformer(currentVal)

      const res = isNil(computedVal)
        ? ({} as EmptyDict)
        : (objOf(createParent(isDefault, bpVal), computedVal) as AnyDict)

      return mergeDeepRight(acc, res) as AnyDict
    }, init)

  return ret as AnyDict
}
