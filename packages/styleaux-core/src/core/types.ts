import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants'
import { Arg1, OmitIf, NonNever, AnyFunc, UnionOf } from '../types'
import { CSSObj } from '../cssTypes'

export type MediaKey = string | number

export type PropStyleFunc<P> = (props: P) => CSSObj
export type PropStyleFuncArr<P> = (props: P) => CSSObj[]

export type GetStylePropsLazy<S, M> = WithTheme<EtractInputType<S>, never, M>


interface IAllCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T
}


type OmitNevers<M> = NonNever<M>

/**
 * ResponsivePropValue
 */
export type ResponsivePropValue<Media extends {}, ValueType> =
  {
    [key in keyof Media]?: ValueType
  } & IAllCssValue<ValueType> | Array<ValueType | undefined>



type If<Condition extends boolean, Then, Else = never> = Condition extends true ? Then : Else;


export type IsNeverOrEmptyObj<T> =
  [T] extends [never] ? true : keyof OmitNevers<T> extends never ? true : false


export type ResponsiveProp<ValueType, Media extends {} = never> = ValueType | ResponsivePropValue<Media, ValueType>

export type NeverToStringOrNumber<T> = T extends never ? string | number : T
export type NeverToStringOrNumberMap<T> = { [K in keyof T]?: NeverToStringOrNumber<T[K]> }


export type ResponsiveObject<P, MediaMap> =
  If<IsNeverOrEmptyObj<MediaMap>, NeverToStringOrNumberMap<P>, {
    [K in keyof P]+?: ResponsiveProp<NeverToStringOrNumber<P[K]>, MediaMap>
  }>


export type IfNever<T, Then> = [T] extends [never] ? Then : T



export type ResponsiveProps<P, B> = {
  [K in keyof P]+?: ResponsiveProp<IfNever<P[K], string | number>, B>
}


export interface ITheme<T> {
  [THEME_KEY]?: T & { [MEDIA_KEY]?: undefined }
}
export interface IMediaTheme<T, B> {
  [THEME_KEY]?: T & { [MEDIA_KEY]: B }
}


export type ThemeWithMedia<T, B> = [B] extends [never]
  ? [T] extends [never]
  ? Partial<ITheme<any>>
  : ITheme<T>
  : [T] extends [never] ? { [THEME_KEY]?: any } : IMediaTheme<T, B>

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithMedia<T, B>

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




/**
 * Returns Array Indexes as union
 * Indices<[1,2]> => "0" | "!"
 */
export type Indices<T> = Exclude<keyof T, keyof any[]>

/**
 * Extract Arg1 for each function in the array array
 */
export type ExtractArg1FromArray<T extends AnyFunc[]> = Arg1<UnionOf<T>>

export type OmitTheme<T extends {}> = OmitIf<T, IConstants['THEME_KEY']>

export type ResolveCreateStyleMapValueType<T> =
  T extends AnyFunc
  ? Arg1<T>
  : T extends (AnyFunc)[]
  ? ExtractArg1FromArray<T> : T extends Record<string, any>
  ? boolean : never
// If primitive, then prop types was directly passed
// : T extends number | string | boolean
// ? T : {}

export type EtractInputType<P> =
  {
    [K in keyof P]: ResolveCreateStyleMapValueType<P[K]>
  }


export type EtractNonResponsiveInputType<STYLES, I = EtractInputType<STYLES>> = {
  [K in keyof I]?: InferResponsivePropValue<I[K]>
}


export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R //OmitTheme<R>
  : {};

