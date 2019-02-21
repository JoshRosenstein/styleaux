import {whenFunctionCallWith, safeMapValues, falseToNull} from '../utils'
import {isBoolean} from 'typed-is'
import {IBreakpoints} from './types'
import {Dict, Maybe, IDictionary} from '../types'

import {createResponsive} from './responsive'

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

export interface IResponsiveProp<P extends IDictionary> {
  (
    args: {
      defaultValue?: any
      value?: any
      transform?: boolean
      cssProp?: keyof P | string | boolean
      prop?: keyof P | string
      preFn?: (...args: any[]) => any | string
      postFn?: (...args: any[]) => any | string
      path?: string
    },
  ): (props: P) => IDictionary
}

export const createResponsiveP = (
  responsive: Function,
  getBreakpoints: (...args: any[]) => any,
  transformStyle: Function,
  globalOptions: any,
) => {
  return function responsiveProp<P extends IDictionary>({
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
    cssProp?: keyof P | string | boolean
    prop?: keyof P | string
    [index: string]: any
  }) {
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(props: Partial<P> & IDictionary) {
      let css
      ///CssProp can be false- if theme attribute returns a style object
      if (!isBoolean(cssProp)) {
        css = cssProp || targetPropName
        targetPropName = targetPropName || cssProp
      }

      // If no Value is Supplied, then do prop lookup
      if (!value) {
        value = props[targetPropName]
      }
      // console.log({css, targetPropName})
      let transformer = (v: any) => v
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
