import {isArray, isFunction, isObject} from 'typed-is'
import {compact, mergeAllDeepRight} from '@roseys/futils'

import {IDictionary} from '../types'
const cleanAndMerge = <T>(arr: T[]): IDictionary<T> =>
  mergeAllDeepRight(compact(arr))

// T extends any[],
// P extends IDictionary,
// R,
// FN extends (...args: T) => (props: P) => R,
export const createCompose = <
  T extends any[],
  P extends IDictionary,
  R,
  FN extends (...args: T) => (props: P) => R
>(
  funcP: FN,
) =>
  function func(...def: T | Array<FN>): ReturnType<FN> {
    if (def.length === 1) {
      if (isFunction(def)) {
        return def as ReturnType<FN>
      }

      if (isObject(def[0])) {
        return funcP(...(def[0] as any)) as ReturnType<FN>
      }
      if (isArray(def)) {
        def = def[0] as T
      }
    }
    return ((props: P) =>
      cleanAndMerge(
        (def as any).map(element => {
          return isFunction(element)
            ? element(props)
            : isArray(element)
            ? func(...element)(props)
            : funcP(...element)(props)

          // if(isFunction(element)) return element(props)
          // if(isArray(element)) {return func(...element)(props)} else{
          //   return funcP(...element)(props)
          // }
        }),
      )) as ReturnType<FN>

    // /// For functions
    // if (isFunction(def)) {
    //   return def as ReturnType<P>
    // }
    // /// For Arrays
    // if (isArray(def)) {
    //   return ((props: IDictionary) =>
    //     mergeAllDeepRight(
    //       compact(def.map(d => funcP(d)(props))),
    //     )) as ReturnType<P>
    // }

    // /// For single Objects
    // return funcP(def as any) as ReturnType<P>
  }
