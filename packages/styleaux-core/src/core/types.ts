import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants'
import {Media} from './overidableTypes'
import {Arg1,Omit,NonNever, Dictionary} from '../types'
import {Interpolation3} from '../cssTypes2'
export type MediaKey= string | number

export type PropStyleFunc<P extends Record<string,any>=Record<string,any>> = (mergedProps: P) => Interpolation3
export type PropStyleFuncArr<P extends Record<string,any>=Record<string,any>> = (mergedProps: P) => Interpolation3[]

export type GetStylePropsLazy<S,M> =  ResponsiveObject<EtractInputType<S>,M>


interface IAllCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T
}


type OmitNevers<M>=NonNever<M>

export type MediaMapFromKeys<Media extends {},V > = {
  [key in keyof OmitNevers<Media>]?: V
}  & IAllCssValue<V>

export type ResponsivePropValue<Media extends {}, ValueType> =
MediaMapFromKeys<Media,ValueType> | Array<ValueType | undefined>



type If<Condition extends boolean, Then, Else = never> = Condition extends true ? Then : Else;


export type IsNeverOrEmptyObj <T> =
[T] extends [never] ? true: keyof OmitNevers<T> extends never?true: false


export type ResponsiveProp<ValueType, BreakPoints = never> =ValueType | ResponsivePropValue<BreakPoints, ValueType>

export type NeverToStringOrNumber <T> =T extends never? string | number: T
export type NeverToStringOrNumberMap <T> = {[K in keyof T]?: NeverToStringOrNumber<T[K]>}


export type ResponsiveObject<P, B extends {}=Media> =
If<IsNeverOrEmptyObj<B>,NeverToStringOrNumberMap<P>,{
  [K in keyof P]?: ResponsiveProp<NeverToStringOrNumber<P[K]> , B>
}>


export type IfNever <T,Then> = [T] extends [never] ? Then: T



export type ResponsiveProps<P, B> = {
  [K in keyof P]?: ResponsiveProp< IfNever<P[K],string | number> , B>
}

export type WithOptionalTheme<P extends {[THEME_KEY]?: T}, T> = Omit<P, typeof THEME_KEY> & {
  [THEME_KEY]?: T
}

export type ThemeWithOptionalMedia<T extends {[MEDIA_KEY]?: M}, M> = Omit<T, typeof MEDIA_KEY> & {
  [MEDIA_KEY]?: M
}

export interface ITheme<T> {
  [THEME_KEY]?: T & {[MEDIA_KEY]?: Media}
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

