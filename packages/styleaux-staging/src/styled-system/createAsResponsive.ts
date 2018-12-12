import {isArray, isFunction} from 'typed-is'
import {compact, mergeAllDeepRight} from '@roseys/futils'

import {createResponsive} from '@styleaux/plugin-responsive'

type ResponsiveP = ReturnType<typeof createResponsive>

export const createAsResponsive = <T extends ResponsiveP>(responsiveP: T) =>
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
