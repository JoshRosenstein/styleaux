import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  STATIC_STYLES_KEY,
  IConstants,
} from '../constants'
import {Arg1} from '../types'

interface IAllCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T
}

export type ResponsivePropValue<BreakPoints, ValueType> = {
  [P in Extract<keyof BreakPoints, string>]?: ValueType
} &
  IAllCssValue<ValueType>

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType | IAllCssValue<ValueType>
  : ValueType | ResponsivePropValue<BreakPoints, ValueType>

export type ResponsiveObject<P, B> = {
  [K in keyof P]?: P[K] extends never
    ? ResponsiveProp<string | number, B>
    : ResponsiveProp<P[K], B>
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
  : [T] extends [never]?{}: IBreakpointTheme<T, B>

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>

export type ExtractNonResponsiveValue<T> = T extends ResponsiveProp<
  infer U,
  any
>
  ? U
  : T

export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles
}

export type Indices<T> = Exclude<keyof T, keyof any[]>
export type ExtractArg1FromArray<T> = Arg1<T[Indices<T>]>

export type RemoveStatic<R> = R extends {[STATIC_STYLES_KEY]?: any}
  ? Pick<R, Exclude<keyof R, IConstants['STATIC_STYLES_KEY']>>
  : R

export type EtractInputType<P> = RemoveStatic<
  {
    [K in keyof P]?: P[K] extends IStyles
      ? boolean
      : P[K] extends (...args: any[]) => any
      ? Arg1<P[K]>
      : P[K] extends ((...args: any[]) => any)[]
      ? ExtractArg1FromArray<P[K]>
      : {}
  }
>

export type EtractNonResponsiveInputType<P, I = EtractInputType<P>> = {
  [K in keyof I]?: ExtractNonResponsiveValue<I[K]>
}

export type ResolveStyleProps<S, B extends {} = never> = ResponsiveObject<
  EtractInputType<S>,
  B
>

export type InferPropsFromStyle<P, I = EtractInputType<P>> = {
  [K in keyof I]?: InferPropsFromFunctionArgument<I[K]>
}

export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R extends { theme?: any } ? Pick<R, Exclude<keyof R, 'theme'>> : R
  : {};


