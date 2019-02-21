//@flow
import {
  pipe,
  flip,
  toString,
  divide,
  defaultTo,
  round,
  append,
} from '@roseys/futils'
//import {pxToT} from './types'

/// Todo: Flow not working when not importing directly
import isString from 'typed-is/lib/isString'
import isNumber from 'typed-is/lib/isNumber'
import isNil from 'typed-is/lib/isNil'

import {isNonZeroNumber} from '../utils'

const divideBy = flip<number, number, number>(divide)

//const divideByC = divideBy2(1)

const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
const ensureNumber = (v: string | number) => (isNumber(v) ? v : parseFloat(v))

const getCssValueStringPair = (value: string | number) => {
  const unitlessValue = ensureNumber(value) || undefined
  if (isNumber(value)) return [value, 0]
  if (isString(value)) {
    const maybeMatched = value.match(cssRegex)
    if (Array.isArray(maybeMatched)) {
      return [unitlessValue, maybeMatched[2]]
    }
    return [value, 0]
  }

  return [value, 0]
}

const defaultDivisor: number = 16
//pxToT

export function pxTo(
  divisor?: number,
): {
  (unit?: undefined): {
    (pxValue: string): string | number
    (pxValue: number): number
    <T>(pxValue: T): T
  }
  (unit: string): {
    (pxValue: string | number): string
    <T>(pxValue: T): T
  }
}

export function pxTo(divisor?: number) {
  return (unit: string | undefined) => (
    pxValue: number | string | undefined,
  ): number | string | undefined => {
    if (!(isString(pxValue) || isNumber(pxValue))) {
      return pxValue
    }

    const [maybeUnitlessValue, un] = getCssValueStringPair(pxValue)
    if (un && un !== 'px') return pxValue
    if (isNonZeroNumber(maybeUnitlessValue)) {
      const possiblyAppendNewUnit = (x: number): number | string =>
        !isNil(unit)
          ? pipe(
              toString,
              append(unit),
            )(x)
          : x

      return pipe(
        divideBy(defaultTo(defaultDivisor, divisor)),
        round(3),
        possiblyAppendNewUnit,
      )(maybeUnitlessValue)
    }
    return pxValue
  }
}

//export type PxTo=typeof pxTo
export default pxTo
