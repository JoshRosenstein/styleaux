import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants'
import {Arg1,Omit, Dictionary,Required} from '../types'
import {NestedCSSObject} from '../cssTypes'
interface IAllCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T
}

export type ResponsivePropValue<BreakPoints, ValueType> = ({
  [P in Extract<keyof BreakPoints, string>]?: ValueType
} &
  IAllCssValue<ValueType>) | Array<ValueType | undefined>

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  : ValueType | ResponsivePropValue<BreakPoints, ValueType>

export type ResponsiveObject<P, B,PR=Required<P>> = {
  [K in keyof PR]?: PR[K] extends never
    ? ResponsiveProp<string | number, B>
    : ResponsiveProp<PR[K], B>
}

export interface ITheme<T> {
  [THEME_KEY]?: T & {[MEDIA_KEY]?: undefined}
}
export interface IBreakpointTheme<T, B> {
  [THEME_KEY]?: T & {[MEDIA_KEY]: B}
}


export type ThemeWithBreakpoints<T, B> = [B] extends [never]
  ? [T] extends [never]
    ? Partial<ITheme<any>>
    : ITheme<T>
  : [T] extends [never]?{[THEME_KEY]?:any}: IBreakpointTheme<T, B>

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>

export type ExtractNonResponsiveValue<T> = T extends ResponsiveProp<
  infer U,
  any
>
  ? U
  : T

export type IStyles =NestedCSSObject

export type Indices<T> = Exclude<keyof T, keyof any[]>
export type ExtractArg1FromArray<T> = Arg1<T[Indices<T>]>

export type OmitTheme<T extends {},K=IConstants['THEME_KEY']>= K extends keyof T? Omit<T,K>:T

export type OmitStaticStyles<R,K= IConstants['STATIC_STYLES_KEY']> = K extends keyof R
  ? Omit<R,K>:R

export type EtractInputType<P> = OmitStaticStyles<
  {
    [K in keyof P]: P[K] extends IStyles
    ? boolean
    : P[K] extends (...args: any[]) => any
    ? Arg1<P[K]>
    : P[K] extends ((...args: any[]) => any)[]
    ? ExtractArg1FromArray<P[K]>
    : P[K] extends Dictionary
    ? boolean
    // If primitive, then prop types was directly passed
    : P[K] extends number | string
    ? P[K] : {}
  }
>

export type EtractNonResponsiveInputType<STYLES, I = Required<EtractInputType<STYLES>>> = {
  [K in keyof I]?: ExtractNonResponsiveValue<I[K]>
}


export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R //OmitTheme<R>
  : {};

