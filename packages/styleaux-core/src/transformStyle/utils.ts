import {isString, isNumber} from 'typed-is'

export const isNeg = (v: string | number) =>
  isString(v) ? /^-.+/.test(v) : v < 0

export const stripNeg = (v: string | number) =>
  isString(v) ? v.slice(1) : Math.abs(v)
export const toNeg = (v: string | number) => (isNumber(v) ? v * -1 : `-${v}`)
