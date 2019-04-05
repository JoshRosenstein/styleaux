import {splitUnit} from './splitUnit'
import {isNumber} from 'typed-is'

export function pxTo(unit: string | undefined = undefined, base: number = 16) {
  return (pxValue: number | string, divisor = base): number | string => {
    const {prefix, value, unit: un} = splitUnit(pxValue)
    if (un && un !== 'px') return pxValue

    if (isNumber(value) && value !== 0) {
      const converted = value / divisor
      return unit
        ? prefix + converted + unit
        : prefix
        ? prefix + converted
        : converted
    }
    return pxValue
  }
}

export const pxToRem = pxTo('rem')

export const pxToEm = pxTo('em')

export const pxToRelative = pxTo()

export const pxToPct = pxTo('%', 16 / 100)
