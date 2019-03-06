import {whenFunctionCallWith, safeMapValues, falseToNull} from '../utils'
import {IStyles, IResponsiveOptions, WithTheme} from './types'
import {isBoolean, isNil} from 'typed-is'
import {createResponsive} from './responsive'

export interface IResponsivePOptions<
  P,
  T,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
> {
  /**
   * The css property this function should map to
   */
  cssProp: string
  /**
   * Todo
   */
  value?: any
  /**
   * Todo
   */
  defaultValue?: any
  /**
   * Todo
   */
  transform?: boolean
  /**
   * Todo
   */
  prop: Extract<keyof P, string>

  /**
   * The property within the theme to map the `prop` value to
   */
  path?: K

  valueOnly?: boolean
  /**
   * Function to be performed prior to themekey lookup
   */
  preFn?: ((...args: any[]) => any) | string

  /**
   * Function to be performed after themekey lookup
   */
  postFn?: ((...args: any[]) => any) | string
}

/**
 * @requires toMq
 */
export enum OPTIONSKEYS {
  breakpointsKey = 'responsive.breakpointsKeyInTheme',
}

export type Options = {
  [index: string]: any
  defaultBreakPoints: any
}

export const defaultOptions = {
  defaultTheme: {},
  defaultBreakPoints: {},
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

export const createResponsiveP = <DT extends {} = never, DB extends {} = never>(
  responsive: <A extends {}>(
    responsiveConfig: IResponsiveOptions<A>,
  ) => IStyles | undefined,
  getBreakpoints: (...args: any[]) => any,
  transformStyle: (transformConfig: TransformPropsOptions) => any,
  globalOptions?: TransformPropsOptions,
) => {
  return function responsiveProp<P, T = DT, B extends {} = DB>({
    defaultValue,
    value,
    cssProp,
    prop,
    path,
    transform,
    ...localoptions
  }: IResponsivePOptions<P, T>) {
    return function responsiveP(
      props: WithTheme<P, T, B>,
    ): IStyles | undefined {
      let transformOptions = {
        ...globalOptions,
        ...localoptions,
        ...(path ? {path} : {}),
      } as any

      // If no Value is Supplied, then do prop lookup

      let css
      let curentValue = value
      let TProp = prop as string
      ///CssProp can be false- if theme attribute returns a style object
      if (!isBoolean(cssProp)) {
        css = cssProp || prop
        TProp = TProp || cssProp
      }

      if (isNil(value)) {
        curentValue = props[TProp]
        /// Short Exit
        if (isNil(curentValue) && !defaultValue) {
          return undefined
        }
      }

      let transformer = (v: any) => v
      if (transform !== false && (transform || transformOptions)) {
        transformer = v =>
          transformStyle({
            value: v,
            cssProp: cssProp,
            valueOnly: true,
            ...transformOptions,
          })(props)
      }

      // @ts-ignore
      return responsive({
        // @ts-ignore
        value: safeMapValues(falseToNull, curentValue), // @ts-ignore
        // @ts-ignore
        defaultValue,
        cssProp: css,
        transformer,
        breakpoints: whenFunctionCallWith(props)(getBreakpoints),
      })
    }
  }
}

export default createResponsive

// const DUmmy = (a: any): IStyles => ({
//   a: 1,
// })

// const DUmmy2 = (a: TransformPropsOptions): any => {}
// interface IColors2 {
//   red: string
//   blue: string
//   green: string
// }

// interface IBreakpoints2 {
//   small: string
//   medium: string
//   large: string
// }

// interface IMyTheme2 {
//   colors: IColors2
//   breakpoints: IBreakpoints2
// }

// const myTheme: IMyTheme2 = {
//   colors: {
//     red: '#f00',
//     green: '#0f0',
//     blue: '#00f',
//   },
//   breakpoints: {
//     small: '@media (min-width: 30em)',
//     medium: '@media (min-width: 40em)',
//     large: '@media (min-width: 50em)',
//   },
// }

// const style = createResponsiveP<IMyTheme2, IBreakpoints2>(DUmmy, DUmmy, DUmmy2)

// type colorKeys = keyof IMyTheme2['colors']

// const color = style<{co: colorKeys}>({
//   path: 'colors',
//   cssProp: 'color',
//   prop: 'co',
// })

// const colort = color({co: 'red'})
