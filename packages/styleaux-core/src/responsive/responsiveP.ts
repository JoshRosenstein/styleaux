import {always, prop, any} from '@roseys/futils'
import {
  isResponsiveType,
  whenFunctionCallWith,
  safeMapValues,
  falseToNull,
} from '../utils'
import {isTruthy, isPlainObject, isArray, isNil} from 'typed-is'
import {MaybeInputNumberOrString, IBreakpoints} from './types'
import {Dict, MapKeys, Maybe} from '../types'
import {responsiveReducer} from './responsiveHelpers'
import {createResponsive} from './responsive'
import {isObjectOrArray} from './utils'

/**
 * @requires toMq
 */
export enum OPTIONSKEYS {
  breakpointsKey = 'responsive.breakpointsKeyInTheme',
}

export type Options = {
  [index: string]: any
  defaultBreakPoints: IBreakpoints
}

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
}

export type responsivePProps<B, P> = Partial<
  {
    [K in keyof P]: Maybe<
      | Partial<Record<keyof B | 'default', number | string>>
      | (number | string)[]
      | string
      | number
    >
  }
> &
  Dict<any>

export const createResponsiveP = (
  responsive: Function,
  getBreakpoints: Function,
  transformStyle: Function,
  globalOptions: any,
) => {
  return function responsiveProp<P extends Dict<any>>({
    defaultValue,
    value,
    cssProp,
    prop: targetPropName,
    transform,
    ...localoptions
  }: {
    defaultValue?: any
    value?: any
    transform?: boolean
    cssProp: keyof P
    prop?: keyof P
  }) {
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(props) {
      const css = cssProp || targetPropName
      targetPropName = targetPropName || cssProp

      // If no Value is Supplied, then do prop lookup
      if (!value) {
        value = props[targetPropName]
      }

      let transformer = v => v
      if (transform !== false && (transform || transformOptions)) {
        transformer = v =>
          transformStyle({
            value: v,
            cssProp: css,
            valueOnly: true,
            ...transformOptions,
          })(props)
      }

      return responsive({
        value: safeMapValues(falseToNull, value),
        defaultValue,
        cssProp: css,
        transformer,
        breakpoints: whenFunctionCallWith(props)(getBreakpoints),
      })
    }
  }
}

export default createResponsive
