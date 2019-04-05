import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants'
import {Arg1,Omit, Dictionary} from '../types'
interface IAllCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T
}



export type MediaMapFromKeys<Media extends {},V > = {
  [key in keyof Media]?: V
}  & IAllCssValue<V>

export type ResponsivePropValue<Media extends {}, ValueType> =
MediaMapFromKeys<Media,ValueType> | Array<ValueType | undefined>




export type ResponsiveProp<ValueType, BreakPoints = never> =
IfElseNever<BreakPoints, ValueType, ValueType | ResponsivePropValue<BreakPoints, ValueType>>


export type ResponsiveObject<P, B extends {}> = {
  [K in keyof P]?: ResponsiveProp<P[K] extends never? string | number:P[K] , B>
}


export type IfNever <T,Then> = [T] extends [never] ? Then: T

export type IfElseNever <T,Then,Else > = [T] extends [never] ? Then: Else

export type ResponsiveProps<P, B> = {
  [K in keyof P]?: ResponsiveProp< IfNever<P[K],string | number> , B>
}
export interface Media<TMedia> {
  [MEDIA_KEY]:TMedia
}

export type WithOptionalTheme<P extends {[THEME_KEY]?: T}, T> = Omit<P, typeof THEME_KEY> & {
  [THEME_KEY]?: T
}

export type ThemeWithOptionalMedia<T extends {[MEDIA_KEY]?: M}, M> = Omit<T, typeof MEDIA_KEY> & {
  [MEDIA_KEY]?: M
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

  export type InferResponsivePropValue<T> = T extends ResponsiveProp<
  infer U,
  any
>
  ? U
  : T

  export interface IStyles {
    [ruleOrSelector: string]: string | number | IStyles;
  }

export type Indices<T> = Exclude<keyof T, keyof any[]>
export type ExtractArg1FromArray<T> = Arg1<T[Indices<T>]>

export type OmitTheme<T extends {},K=IConstants['THEME_KEY']>= K extends keyof T? Omit<T,K>:T

export type OmitStaticStyles<R,K= IConstants['STATIC_STYLES_KEY']> = K extends keyof R
  ? Omit<R,K>:R

  export type ResolveCreateStyleType<T>=T extends IStyles
  ? boolean
  : T extends (...args: any[]) => any
  ? Arg1<T>
  : T extends ((...args: any[]) => any)[]
  ? ExtractArg1FromArray<T>
  : T extends Dictionary
  ? boolean
  // If primitive, then prop types was directly passed
  : T extends number | string | boolean
  ? T : {}

export type EtractInputType<P> = OmitStaticStyles<
  {
    [K in keyof P]: ResolveCreateStyleType<P[K]>
  }
>

export type EtractNonResponsiveInputType<STYLES, I = EtractInputType<STYLES>> = {
  [K in keyof I]?: InferResponsivePropValue<I[K]>
}


export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R //OmitTheme<R>
  : {};

