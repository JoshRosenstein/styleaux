import {isArray, isFunction} from 'typed-is'
import {compact, mergeAllDeepRight} from '@roseys/futils'

export const createAsResponsive = responsiveP =>
  function asResponsive(def: any): any {
    if (isFunction(def)) {
      return def
    }

    if (isArray(def)) {
      return (props: any) =>
        mergeAllDeepRight(compact(def.map(d => asResponsive(d)(props))))
    }
    return responsiveP(def)
  }
