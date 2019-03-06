import {
  prop,
  objOf,
  mergeDeepRight,
  mapValues,
  when,
  noop,
} from '@roseys/futils'
import {arrToObj} from '../utils'
import {isBoolean, isNil, isArray, isPlainObject} from 'typed-is'
//import * as invariant from 'invariant'
import {Dict, IDictionary} from '../types'

export const nonBoolsToNil = mapValues(when(x => !isBoolean(x), noop))
export const boolsToNil = mapValues(when(isBoolean, noop))

declare function parseFloat(numberOrString: number | string): number

const getBreakPoints = <T>(
  breakpoints: Dict<T> | Array<T>,
  breakPointsFromTheme: any,
): any => {
  const Dummy = 0

  // const switchValue =
  //   (isArray(breakPointsFromTheme) ? 1 : -1) + (isArray(breakpoints) ? 10 : -10)

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
        //  const b = {default: Dummy, ...breakPointsFromTheme}
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

const sort = <V extends IDictionary>(value: V, getBp: any) =>
  Object.keys(value)
    .sort((a, b) => parseFloat(getBp(a)) - parseFloat(getBp(b)))
    .reduce(
      (acc, key) => {
        acc[key] = value[key]
        return acc
      },
      {} as V,
    )

export const responsiveReducer = <T extends {[index: string]: number | string}>(
  value: {[index: string]: any},
  breakPointsFromTheme: T,
  css: string,
  tranformer: (x: any) => any,
  toMq: (x: any) => string,
  init = {},
) => {
  // if (!isResponsiveType(value)) {
  //   value = [value]
  // }

  const transFormedBps = getBreakPoints(value, breakPointsFromTheme)

  const createParent = css
    ? (isDefault: boolean, bpVal: any) => (isDefault ? css : [toMq(bpVal), css])
    : (isDefault: boolean, bpVal: any) => (isDefault ? [] : toMq(bpVal))

  // /sort IBreakpoints
  const getBp = (x: string) => prop(x, transFormedBps)

  const sorted = sort(value, getBp)

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
        bpKey === '0' ||
        bpKey === 'default' ||
        bpKey === 'base' ||
        bpVal === 0 ||
        bpVal === '0'
      const computedVal = tranformer(currentVal)
      if (isNil(computedVal)) return acc

      return mergeDeepRight(
        acc,
        objOf(createParent(isDefault, bpVal), computedVal),
      )
    }, init)

  return ret
}
