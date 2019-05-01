import {pathOr, identity, pipe} from '@roseys/futils'
import {isString, isNumber, isBoolean, isNil} from 'typed-is'

export const toNeg = (v: string | number) => (isNumber(v) ? v * -1 : `-${v}`)
export const isNeg = (v: string | number) =>
  isString(v) ? /^-.+/.test(v) : v < 0

export const stripNeg = (v: string | number | boolean) =>
  isBoolean(v)
    ? Number(v)
    : isNeg(v)
    ? isString(v)
      ? v.slice(1)
      : Math.abs(v)
    : v

export const lookUpTransformNegative = (
  input,
  obj,
  transformValue = identity,
) => {
  if (isNil(input)) {
    return [identity, null]
  }
  return [
    isNeg(input)
      ? pipe(
          toNeg,
          transformValue,
        )
      : transformValue,
      pathOr(input,stripNeg(input), obj),
  ]
}

export const transformNegatives = (input, obj, transformValue) => {
  const [t, v] = lookUpTransformNegative(input, obj, transformValue)
  return t(v)
}
