import {whenFunctionCallWith, safeMapValues, falseToNull} from '../utils'

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
    cssProp: keyof P | string
    prop?: keyof P | string
  }) {
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(props: Partial<P> & IDictionary) {
      const css = cssProp || targetPropName
      targetPropName = targetPropName || cssProp

      // If no Value is Supplied, then do prop lookup
      if (!value) {
        value = props[targetPropName]
      }

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
