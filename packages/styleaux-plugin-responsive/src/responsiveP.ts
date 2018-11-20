// @flow
import {always, prop, any} from '@roseys/futils'
import {isResponsiveType} from '@styleaux/helper-plugin-utils'
import {isTruthy, isPlainObject, isArray, isNil} from 'typed-is'
import {MaybeInputNumberOrString, Breakpoints} from './types'
import {
  Dict,
  safeMapValues,
  falseToNull,
  MapKeys,
  Maybe,
} from '@styleaux/helper-plugin-utils'
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
  defaultBreakPoints: Breakpoints
}

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
}

export const createResponsiveP = <R extends Function, B extends Breakpoints>(
  responsive: R,
  getBreakpoints: ((props: any) => B),
  transformStyle: (
    {value}: {[index: string]: any; value: any},
  ) => (props: any) => any,
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
    value?: MaybeInputNumberOrString<B>
    transform?: boolean
    cssProp: keyof P
    prop?: keyof P
  }) {
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(
      props: Partial<
        {
          [K in keyof P]: Maybe<
            | Partial<Record<keyof B | 'default', number | string>>
            | (number | string)[]
            | string
            | number
          >
        }
      > &
        Dict<any>,
    ) {
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
        breakpoints: getBreakpoints(props),
      })
    }
  }
}

export default createResponsive
