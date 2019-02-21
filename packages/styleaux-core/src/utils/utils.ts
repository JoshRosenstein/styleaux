import {
  flow,
  pipe,
  flip,
  toString,
  test,
  identity,
  curryN,
  reduce,
  reduceWhile,
  either,
  concat,
  when,
  defaultTo,
  attach,
  ifElse,
  mapValues,
  isDefined,
  curry,
  append,
} from '@roseys/futils'

import {
  isPopulated,
  isNumber,
  isArray,
  isNil,
  isFunction,
  isFalse,
  isPlainObject as isObject,
} from 'typed-is'
import {Primitive, IDictionary} from '../types'

export const cleanAndSort = <T extends IDictionary>(unordered: T) => {
  const ordered = {} as T
  Object.keys(unordered)
    .sort()
    .forEach(key => {
      const val = unordered[key]
      if (isPopulated(val)) {
        if (isObject(val)) {
          ordered[key] = cleanAndSort(val)
        } else {
          ordered[key] = val
        }
      }
    })
  return ordered
}

export const firstNonNil = reduceWhile(isNil, (a, v) => v, null)
export const isResponsiveType = (x: any): x is {[index: string]: any} | any[] =>
  isObject(x) || isArray(x)

type SafeMapValues = {
  <T, U>(func: ((value: T) => U), item: U[]): U[]
  <T, K extends string, U>(func: ((value: T) => U), item: Record<K, T>): Record<
    K,
    U
  >
  <T extends Primitive, U>(func: ((value: T) => U), item: T): U

  <T extends Primitive, U>(
    func: ((value: T) => U),
    item: T | T[] | Record<string, T>,
  ): U | U[] | Record<string, U>
}
export const safeMapValues: SafeMapValues = curryN(
  2,
  <T extends IDictionary | any[]>(func: (arg: T) => any, item: T) =>
    flow(
      item,
      ifElse(either(isArray, isObject), mapValues(func), func),
    ),
)

export const isTemplate = test(/{!([^}]+)}/g)
// @ts-ignore
export const pipeIfDefined = (...fns) => when(isDefined, pipe(...fns))

export function extractTemplateValue(template: string) {
  const rx = new RegExp('{!(.*?)}')
  const values = rx.exec(template) // or: data.match(rx);
  return values && values[1].trim()
}

export const arrToObj = (arr: any[]): IDictionary =>
  reduce(
    (accumulated: IDictionary, value: any, key: number) =>
      attach(key, value, accumulated),
    {},
    arr,
  )

export const isNonZeroNumber = (value: any): value is number =>
  isNumber(value) && value !== 0

export const appendString = flip(concat)

const whenisNonZeroNumber = curry(
  (fn: ((...args: any[]) => any) | undefined, input: number | string) =>
    when(isNonZeroNumber, defaultTo(identity, fn))(input),
)

export const appendUnit = (unit: string) =>
  whenisNonZeroNumber(
    pipe(
      toString,
      append(unit),
    ),
  )

// export const isNilOrEmpty = either(isNil, isEmpty)
// export const isNotNilOrEmpty = complement(isNilOrEmpty)

const isUndefinedOrFalse = (x: any): x is null | undefined | boolean =>
  isNil(x) || isFalse(x) //either(isNil, isFalse)

export const falseToNull = <T>(value: T): T | null =>
  isFalse(value) ? null : value

export const iterateUntilResult = <T extends Object, K extends string, U>(
  computeFn: (accumulator: U, value: T, key?: K) => U,
) => (obj: Record<K, T>) =>
  reduceWhile(isUndefinedOrFalse, computeFn, false as any, obj)

export const whenFunctionCallWith = <T, U>(...argsToGive: T[]) =>
  when(isFunction, (fnItem: (...args: T[]) => U) => fnItem(...argsToGive))

export const isAtRule = (selector: string): boolean =>
  selector.indexOf('@') === 0
export const isMQ = (selector: string): boolean => /^(MQ|mq)+/.test(selector)
export const containsSpecial = (str: string): boolean =>
  /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str) // eslint-disable-line no-useless-escape

export const splitSelectors = (selectors: string) => {
  if (isAtRule(selectors)) {
    return [selectors]
  }
  const splitted: Array<string> = []
  let parens: number = 0
  let brackets: number = 0
  let current: string = ''
  for (let i = 0, len = selectors.length; i < len; i++) {
    let char = selectors[i]
    if (char === '(') {
      parens += 1
    } else if (char === ')') {
      parens -= 1
    } else if (char === '[') {
      brackets += 1
    } else if (char === ']') {
      brackets -= 1
    } else if (char === ',') {
      if (!parens && !brackets) {
        splitted.push(current.trim())
        current = ''
        char = ''
      }
    }
    current += char
  }
  splitted.push(current.trim())
  return splitted
}
