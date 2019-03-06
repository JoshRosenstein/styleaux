import {isArray, isFunction} from 'typed-is'
import {compact, mergeAllDeepRight} from '@roseys/futils'

import {IDictionary} from '../types'
import {IResponsiveProp} from '../responsive'

//// TODO figure out how to pass responsive P args with TS auto-suggest still works
export type IParams = {
  defaultValue?: any
  value?: any
  transform?: boolean
  cssProp?: string | boolean
  prop?: string
  preFn?: ((...args: any[]) => any) | string
  postFn?: ((...args: any[]) => any) | string
  path?: string
}

export const createAsResponsive = <P extends IResponsiveProp<IDictionary>>(
  responsiveP: P,
) =>
  function asResponsive<
    A = {
      defaultValue?: any
      value?: any
      transform?: boolean
      cssProp?: string | boolean
      prop?: string
      preFn?: ((...args: any[]) => any) | string
      postFn?: ((...args: any[]) => any) | string
      path?: string
    }
  >(def: IParams | IParams[] | P): ReturnType<P> {
    /// For functions
    if (isFunction(def)) {
      return def as ReturnType<P>
    }
    /// For Arrays
    if (isArray(def)) {
      return ((props: IDictionary) =>
        mergeAllDeepRight(
          compact(def.map(d => asResponsive(d)(props))),
        )) as ReturnType<P>
    }

    /// For single Objects
    return responsiveP(def as any) as ReturnType<P>
  }
