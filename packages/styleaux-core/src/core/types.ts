import { CSSKeys, Unit, Style, Nil, CSSObj } from '@styleaux/types';
import {
  DEFAULT_MEDIA_KEY,
  THEME_KEY,
  MEDIA_KEY,
  IConstants,
} from '../constants';
import {
  Arg1,
  OmitIf,
  AnyFunc,
  UnionOf,
  UnionToIntersection,
} from '../utility-types';

export type Key = string;

export type Keys = Key[];

export type CSSProp = CSSKeys | CSSKeys[];
export interface Props {
  [key: string]: any;
}

export type MediaKey = string | number;

export type ExtractPrimitive<T> = T extends object ? never : T;

export type PropStyleFunc<P extends Props> =
  | ((props: P) => CSSObj)
  | ((props: P) => Style)
  | ((props: P) => Nil)
  | ((props: P) => Style | Nil);

export type PropStyleArrayFunc<P extends Props> = (props: P) => (Style | Nil)[];

export type StyleArrayFunc<T = any> = (...args: T[]) => (Style | Nil)[] | Nil;
export type StyleFunc<T = any> = (...args: T[]) => Style | Nil;

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

export type CreateStylesValueGetterPartial<T, P = never, R = Style> =
  | ((input: T, props?: P, media?: MediaKey) => R)
  | ((input: T, props?: P) => R)
  | ((input: T) => R);

interface BaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  [DEFAULT_MEDIA_KEY]?: T;
}

export type ResponsivePropArray<P> = (P | undefined)[];
export interface ResponsivePropObject<P> {
  [key: string]: P;
}
export type ResponsivePropObjectMedia<P, Media = never> = [Media] extends [
  never
]
  ? ResponsivePropObject<P>
  : { [key in keyof Media]?: P } & BaseCssValue<P>;

export type ResponsiveProp<ValueType = Unit, Media extends {} = never> =
  | ValueType
  | ResponsivePropObjectMedia<ValueType, Media>
  | ResponsivePropArray<ValueType>;

export type ResponsiveProps<P, B = never> = {
  [K in keyof P]?: ResponsiveProp<IfNever<P[K], Unit>, B>
};

export type IfNever<T, Then> = [T] extends [never] ? Then : T;

export interface ThemeWithUnkownMedia<T> {
  [THEME_KEY]?: T & { [MEDIA_KEY]?: undefined };
}

export type WithUnkownMedia<T> = T & { [MEDIA_KEY]?: undefined };

export type NeverToAny<T> = [T] extends [never] ? any : T;

export interface WrapTheme<T> {
  [THEME_KEY]?: NeverToAny<T>;
}

export interface WrapMedia<B> {
  [MEDIA_KEY]?: NeverToAny<B>;
}

export interface ResponsiveTheme<T, B> {
  [THEME_KEY]?: NeverToAny<T> & WrapMedia<B>;
}

export type WithTheme<P extends Props, T, B> = ResponsiveProps<P, B> &
  ResponsiveTheme<T, B>;

/**
 * UnboxResponsiveProp
 * Unbox type wrapped with ResponsiveProp
 */
export type UnboxResponsiveProp<T> = T extends ResponsiveProp<infer R> ? R : T;

export type UnboxResponsiveProps<T> = T extends ResponsiveProps<infer R>
  ? R
  : T;
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

export type GetProps<T> = T extends AnyFunc[]
  ? UnionToIntersection<Arg1<UnionOf<T>>>
  : T extends AnyFunc
  ? Arg1<T>
  : T extends Props
  ? T
  : Props;
