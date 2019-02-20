import {
  map,
  mapKeys,
  test,
  always,
  both,
  equals,
  toPairs,
  identity,
  join,
  pipe,
  flow,
  T,
  when,
  cond,
  either,
  propOr,
  toKebabCase,
  path,
} from '@roseys/futils'
import {isAtRule} from '../utils'

import {nameLookups} from './constants'
import {
  isFunction,
  isNil,
  isString,
  isNumber,
  isArray,
  isObject,
} from 'typed-is'
import {toMqInputAsObj} from './types'
const isDimension = test(/[height|width]$/)

//const replaceShorthandKeys = mapKeys(x => propOr(x, x, nameLookups))
const prefixMedia = (value: string | number) => `@media ${value}`
const objParserCreator = (valueConverter: UnitConverter) => (
  obj: toMqInputAsObj | string,
) => {
  const fn = ([feature, value]) => {
    //feature = isString(feature) ? feature : ''
    feature = nameLookups[feature] || feature
    feature = toKebabCase(feature)
    return flow(
      value,
      when(both(always(isDimension(feature)), isNumber), valueConverter),
      cond([
        [equals(true), always(feature)],
        [equals(false), always(`not ${feature}`)],
        [T, temp => `(${feature}:${temp})`],
      ]),
    )
  }
  /// TODO: fix types
  return pipe(
    toPairs,
    map(fn),
    join(' and '),
  )(obj)
}
type UnitConverter = (unit: string | number) => string
export const createToMq = (
  unitConverter: UnitConverter = value => `${value}`,
) => {
  const objParser = objParserCreator(unitConverter)

  return function toMqF(
    input: toMqInputAsObj | Array<toMqInputAsObj> | number | string | undefined,
  ): string | undefined {
    if (isNil(input)) return undefined
    if (isString(input) && isAtRule(input)) {
      return input
    }
    if (isString(input) || isNumber(input)) {
      return prefixMedia(
        objParser({screen: true, minWidth: unitConverter(input)}),
      )
    }

    if (isArray(input)) {
      return prefixMedia(input.map(objParser).join(', '))
    }
    /// Must be object

    return prefixMedia(objParser(input))

    // return pipe(
    //   cond([
    //     [x => isString(x) && isAtRule(x), identity],
    //     [
    //       isArray,
    //       pipe(
    //         map(objParser),
    //         join(', '),
    //       ),
    //     ],
    //     [
    //       isNumberOrString,
    //       pipe(
    //         unitConverter,
    //         x => ({screen: true, minWidth: x}),
    //         objParser,
    //       ),
    //     ],
    //     [T, objParser],
    //   ]),
    //   when(x => !isAtRule(x), x => `@media ${x}`),
    // )(input)
  }
}

//createToMq[IDKEY] = ASSISTANTID

//const e = Object.assign(createToMq, {[IDKEY]: ASSISTANTID})
export default createToMq