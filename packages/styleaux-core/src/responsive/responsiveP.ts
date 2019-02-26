import {whenFunctionCallWith, safeMapValues, falseToNull} from '../utils'
import {isBoolean} from 'typed-is'
import {IBreakpoints} from './types'
import {Dict, Maybe, IDictionary, WithTheme, IStyles} from '../types'

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

type TransformPropsOptions = {
  value?: any
  //cssProp?: string
  valueOnly?: boolean
  /**
   * The property within the theme to map the `prop` value to
   */
  path?: string
  //getter?: transformFuncs /// OLD

  /**
   * Function to be performed prior to themekey lookup
   */
  preFn?: ((...args: any[]) => any) | string

  /**
   * Function to be performed after themekey lookup
   */
  postFn?: ((...args: any[]) => any) | string

  [index: string]: any
}
export interface IResponsivePOptions<
  P,
  T,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
> extends TransformPropsOptions {
  /**
   * The css property this function should map to
   */
  cssProp: string | boolean

  /**
   * The property of the component's props to read from
   */
  prop?: string //P extends IDictionary ? Extract<keyof P, string> : IDictionary

  /**
   * The property within the theme to map the `prop` value to
   */
  // path?: K | DK | string | string[]

  /**
   * The resolver to be used for array values
   */
  //arrayResolver?: (value: Array<string | number>, themeValue?: T[K]) => string

  /**
   * The fallback value if component's props doesnt exist
   */
  defaultValue?: any

  /**
   * Value for functions that already perform prop lookup
   */
  value?: any

  /**
   * Should pass to global transform function
   */
  transform?: boolean
  /**
   * Function to be performed prior to themekey lookup
   */
  // preFn?: (...args: any[]) => any | string

  /**
   * Function to be performed after themekey lookup
   */
  // postFn?: (...args: any[]) => any | string
  [tranformOptions: string]: any
}

export const createResponsiveP = <
  DT extends {} = never,
  B extends {} = never,
  TransformPOptions extends TransformPropsOptions = TransformPropsOptions
>(
  responsive: Function,
  getBreakpoints: (...args: any[]) => B | B,
  transformStyle: (transformConfig: TransformPOptions) => any,
  globalOptions: any,
) => {
  return function responsiveProp<
    P,
    //  DT extends {} = never,
    T extends {} = DT,
    BP extends {} = B
  >(
    {
      defaultValue,
      value,
      cssProp,
      prop,
      transform,
      ...localoptions
    }: IResponsivePOptions<P, T>, // IResponsivePOptions<P, T, DT> & TransformPOptions, //IDictionary, //IResponsivePOptions<P, T, DT>,
  ) {
    let transformOptions = {...globalOptions, ...localoptions}
    return function responsiveP(
      props: WithTheme<P, T, BP>,
    ): IStyles | undefined {
      let css
      let curentValue = value
      let TProp = prop as string
      ///CssProp can be false- if theme attribute returns a style object
      if (!isBoolean(cssProp)) {
        css = cssProp || prop
        TProp = TProp || cssProp
      }

      // If no Value is Supplied, then do prop lookup
      if (!value) {
        curentValue = props[TProp]
        /// Short Exit
        if (!curentValue && !defaultValue) {
          return undefined
        }
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
        value: safeMapValues(falseToNull, curentValue),
        defaultValue,
        cssProp: css,
        transformer,
        breakpoints: whenFunctionCallWith(props)(getBreakpoints),
      })
    }
  }
}

export default createResponsive
