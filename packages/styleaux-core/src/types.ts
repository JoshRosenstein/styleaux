export type Nothing = null | undefined
export type Maybe<T> = Nothing | T

export interface IDictionary<T = any> {
  [key: string]: T
}

export type Primitive = string | number | boolean | undefined | null
export type Dict<T, K extends string | number = string> = {[key in K]: T}

export type AnyDict = Dict<any>
export type MaybeAnyDict = Maybe<AnyDict>

export type EmptyDict = Dict<never>

export type DictValues<T> = T extends Dict<infer U> ? U : never
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export type MapKeys<T> = {[K in keyof T]: T[K]}

export type CssProp = string | boolean
export interface ICssProp {
  /**
   * The base css value, without any media queries applied
   */
  cssProp: CssProp
}

interface IBaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  default?: T
}

export type ResponsivePropValue<BreakPoints, ValueType> = {
  [P in Extract<keyof BreakPoints, string>]?: ValueType
} &
  IBaseCssValue<ValueType>

export type ResponsivePropArray<ValueType> = Array<ValueType>

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  : ValueType | ResponsivePropValue<BreakPoints, ValueType>
// | ResponsivePropArray<ValueType>

export interface ITheme<T> {
  theme: T & {breakpoints?: undefined}
}
export interface IBreakpointTheme<T, B> {
  theme?: T & {breakpoints: B}
}

export type ResponsiveObject<P, B> = {[K in keyof P]?: ResponsiveProp<P[K], B>}

export type ResponsiveArray<P, B> = {[K in keyof P]?: ResponsiveProp<P[K], B>}

export type ThemeWithBreakpoints<T, B> = [B] extends [never]
  ? [T] extends [never]
    ? Partial<ITheme<any>>
    : ITheme<T>
  : IBreakpointTheme<T, B>

export interface IStyleOptions<
  P,
  T,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
> {
  /**
   * The css property this function should map to
   */
  cssProp: string

  /**
   * The property of the component's props to read from
   */
  prop: Extract<keyof P, string>

  /**
   * The property within the theme to map the `prop` value to
   */
  themeProp?: K

  /**
   * The resolver to be used for array values
   */
  arrayResolver?: (value: Array<string | number>, themeValue?: T[K]) => string
}
export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles
}

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>

export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R extends {theme?: any}
    ? Pick<R, Exclude<keyof R, 'theme'>>
    : R
  : {}

export type StyleProps<
  T1,
  T2 = {},
  T3 = {},
  T4 = {},
  T5 = {},
  T6 = {},
  T7 = {},
  T8 = {},
  T9 = {}
> = InferPropsFromFunctionArgument<T1> &
  InferPropsFromFunctionArgument<T2> &
  InferPropsFromFunctionArgument<T3> &
  InferPropsFromFunctionArgument<T4> &
  InferPropsFromFunctionArgument<T5> &
  InferPropsFromFunctionArgument<T6> &
  InferPropsFromFunctionArgument<T7> &
  InferPropsFromFunctionArgument<T8> &
  InferPropsFromFunctionArgument<T9>
