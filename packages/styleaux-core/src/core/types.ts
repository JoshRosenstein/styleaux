/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Arg1, OmitIf, AnyFunc, UnionOf } from '../types';
import { CSSKeys, Unit, Style, StyleArray, Nil } from '@styleaux/types';
import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants';

export type CSSProp = CSSKeys | CSSKeys[];
export interface Props {
  [key: string]: any;
}

export type MediaKey = string | number;

export type StyleFunction<P extends Props> = (props: P) => StyleArray | null;

export type ExtractPrimitive<T> = T extends object ? never : T;

export type PropStyleFunc<P extends Props> = (props: P) => Style | Nil;
export type PropStyleFuncArr<P extends Props> = (props: P) => StyleArray | Nil;

export type PropStylesFunction<P extends Props> = (
  props: P,
) => StyleArray | Nil;
export type PropStyleFunction<P extends Props> = (props: P) => Style | Nil;

/**
 * A function accepting some `props` and returning an `CSSObj | CSSObj[
 * @param T First arg( input type)
 * @param P Second Arg Props
 * @param R
 *
 * */

export type CreateStylesValueGetter3<T, P = never, R = Style> = (
  ...args: [T, P, MediaKey]
) => R;
export type CreateStylesValueGetter2<T, P = never, R = Style> = (
  ...args: [T, P]
) => R;
export type CreateStylesValueGetterArr<T, P = never, R = Style> = (
  ...args: [T, P, MediaKey] | [T, P] | [T]
) => R;
//export type CreateStylesValueGetter<T, P = never, R = CSSObj> = (...args: [P] extends [never] ? [T] : [T] | [T, P] | [T, P, MediaKey]) => R;
//((...args:[T, P, MediaKey] |[T, P] |[T]) => R)
export type CreateStylesValueGetter<T, P = never, R = Style> =
  | ((input: T, props: P, media: MediaKey) => R)
  | ((input: T, props: P) => R)
  | ((input: T) => R);

export type CreateStylesValueGetterBoth<T, P = never, R = Style> =
  | ((input: T, props: P, media: MediaKey) => R)
  | ((input: T, props?: P, media?: MediaKey) => R)
  | ((input: T, props: P) => R)
  | ((input: T, props?: P) => R)
  | ((input: T) => R);

export type ICreateStylesValueGetter<T, P = never, R = Style> = {
  (input: T, props: P, media?: MediaKey): R;
  (input: T, props?: P, media?: MediaKey): R;
  (input: T, props?: P): R;
  (input: T, props: P): R;
  (input: T): R;
};
export type CreateStylesValueGetterPartial<T, P = never, R = Style> =
  | ((input: T, props?: P, media?: MediaKey) => R)
  | ((input: T, props?: P) => R)
  | ((input: T) => R);

/** A function accepting some `props` and returning an `CSSObj | CSSObj[]` */
export type StaticFuncMixin<P = any> = PropStyleFunc<P> | PropStyleFuncArr<P>;

/** A function accepting some `props` and returning an `StaticFuncMixin` */
export type ResponsiveMixin<P, T, M> = StaticFuncMixin<WithTheme<P, T, M>>;

export type GetStylePropsLazy<S, M> = WithTheme<EtractInputType<S>, never, M>;

interface BaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T;
}

/**
 * ResponsivePropValue
 */
export type ResponsivePropValue<Media extends {}, ValueType> =
  | { [key in keyof Media]?: ValueType } & BaseCssValue<ValueType>
  | (ValueType | undefined)[];

//type If<Condition extends boolean, Then, Else = never> = Condition extends true ? Then : Else;

export type ResponsiveProp<ValueType, Media extends {} = never> = [
  Media
] extends [never]
  ? ValueType
  : ValueType | ResponsivePropValue<Media, ValueType>;

export type ResponsiveObject<P, B> = {
  [K in keyof P]?: ResponsiveProp<IfNever<P[K], Unit>, B>
};

export type IfNever<T, Then> = [T] extends [never] ? Then : T;

export type ResponsiveProps<P, B> = {
  [K in keyof P]?: ResponsiveProp<IfNever<P[K], Unit>, B>
};

export interface ITheme<T> {
  [THEME_KEY]?: T & { [MEDIA_KEY]?: undefined };
}
export interface IMediaTheme<T, B> {
  [THEME_KEY]?: T & { [MEDIA_KEY]: B };
}

export type WithOnlyTheme<T> = [T] extends [never]
  ? Partial<ITheme<any>>
  : ITheme<T>;

export type ThemeWithMedia<T, B> = [B] extends [never]
  ? [T] extends [never]
    ? Partial<ITheme<any>>
    : ITheme<T>
  : [T] extends [never]
  ? { [THEME_KEY]?: any }
  : IMediaTheme<T, B>;

export type WithTheme<P extends Props, T, B> = ResponsiveObject<P, B> &
  ThemeWithMedia<T, B>;

export type ExtractNonResponsiveValue<T> = T extends ResponsiveProp<
  infer U,
  any
>
  ? U
  : T;

export type InferResponsivePropValue<T> = T extends ResponsiveProp<infer U, any>
  ? U
  : T;

export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles;
}

/**
 * Returns Array Indexes as union
 * Indices<[1,2]> => "0" | "!"
 */
export type Indices<T> = Exclude<keyof T, keyof any[]>;

/**
 * Extract Arg1 for each function in the array array
 */
export type ExtractArg1FromArray<T extends AnyFunc[]> = Arg1<UnionOf<T>>;

export type OmitTheme<T extends {}> = OmitIf<T, IConstants['THEME_KEY']>;

/**
 * Creates Type P based on createSyles map values
 * {a:(input:number)=>{margin:input}} //=> {a:number}
 * {b:[(input:number)=>{margin:input}},(input:string)=>{margin:input}}] //=> {b:number | string}
 * {c:{margin:'1px'}} //=> {c:boolean}
 */
export type ResolveCreateStyleMapValueType<T> = T extends AnyFunc
  ? Arg1<T>
  : T extends (AnyFunc)[]
  ? ExtractArg1FromArray<T>
  : T extends Record<string, any>
  ? boolean
  : never;
// If primitive, then prop types was directly passed
// : T extends number | string | boolean
// ? T : {}

export type EtractInputType<P> = {
  [K in keyof P]: ResolveCreateStyleMapValueType<P[K]>
};

/**
 * Simplifies Props extracting only Primitive
 * @example
 * type A= {a:number, b: number | {base:number}}
 * type B= EtractPrimitives<A> //=> {a:number,b:number}
 */
export type EtractPrimitives<P> = { [K in keyof P]: ExtractPrimitive<P[K]> };

export type EtractNonResponsiveInputType<
  STYLES,
  I = EtractInputType<STYLES>
> = { [K in keyof I]?: InferResponsivePropValue<I[K]> };

export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R //OmitTheme<R>
  : {};
