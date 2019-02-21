import {prop} from '@roseys/futils'
import {whenFunctionCallWith} from '../utils'
import {IBreakpoints} from './types'
import {createResponsive} from './responsive'
import {IDictionary} from '../types'

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

export const createResponsiveBoolP = (
  responsiveBool: Function,
  getBreakpoints: any,
  transformStyle: Function,
  globalOptions: any,
) => {
  return function responsiveBoolProp({
    value,
    T: trueValue,
    F: falseValue,
    cssProp,
    defaultValue,
    prop: targetPropName,
    transform,
    ...localoptions
  }: {
    value?: any
    T: string | number
    F?: string | number
    defaultValue?: any
    transform?: boolean
    cssProp: any
    prop?: any
  }) {
    // console.log('responsiveBool', {value, prop})
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(props: IDictionary) {
      const css = cssProp || targetPropName
      targetPropName = targetPropName || cssProp

      // If no Value is Supplied, then do prop lookup

      let transformer = (v: any) => v
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
        breakpoints: whenFunctionCallWith(props)(getBreakpoints),
      })
    }
  }
}

export default createResponsive
