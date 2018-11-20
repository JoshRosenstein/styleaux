// @flow
import {always, prop, any} from '@roseys/futils'
import {isResponsiveType} from '@styleaux/helper-plugin-utils'
import {isTruthy, isPlainObject, isArray, isNil} from 'typed-is'
import {BreakPointKeysOFT, Breakpoints, TransformStyle} from './types'
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

export const createResponsiveBoolP = <
  R extends Function,
  B extends Breakpoints
>(
  responsiveBool: R,
  getBreakpoints: ((props: any) => B),
  transformStyle: TransformStyle,
  globalOptions: any,
) => {
  return function responsiveBoolProp<P extends Dict<B>>({
    value,
    T: trueValue,
    F: falseValue,
    cssProp,
    defaultValue,
    prop: targetPropName,
    transform,
    ...localoptions
  }: {
    value?: Maybe<BreakPointKeysOFT<B, boolean> | boolean>
    T: string | number
    F?: string | number
    defaultValue?: BreakPointKeysOFT<B, boolean> | boolean
    transform?: boolean
    cssProp: keyof P
    prop?: keyof P
  }) {
    // console.log('responsiveBool', {value, prop})
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(
      props: Dict<any> &
        Partial<
          {
            [K in keyof P]: Maybe<
              | Partial<Record<keyof B | 'default', boolean>>
              | (boolean)[]
              | boolean
            >
          }
        >,
    ) {
      const css = cssProp || targetPropName
      targetPropName = targetPropName || cssProp

      // If no Value is Supplied, then do prop lookup

      let transformer = v => v
      if (transform) {
        transformer = v =>
          transformStyle({
            value: v,
            cssProp: css,
            valueOnly: true,
            ...transformOptions,
          })(props)
      }

      return responsiveBool({
        value: prop(targetPropName, props) || defaultValue,
        T: value || trueValue,
        F: falseValue,
        cssProp: css,
        transformer,
        breakpoints: getBreakpoints(props),
      })
    }
  }
}

export default createResponsive
