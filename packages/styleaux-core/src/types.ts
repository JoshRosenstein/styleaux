/**
 * Gives back an object with listed keys removed.
 * This is the opposite of `Pick`.
 * @param T the object whose properties will be removed
 * @param K the union of keys to remove from `T`
 * @returns `T` with the keys `K` removed
 */
export type Omit<T extends object, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type OmitIf<T extends object, K extends keyof any> = K extends keyof T? Omit<T,K>:T

export type Merge<FirstType extends object, SecondType> = Omit<
  FirstType,
  Extract<keyof FirstType, keyof SecondType>
> &
  SecondType

export type NeverToUndefined<T> = [T] extends [never] ? undefined : T

export type Arg1<T> =  T extends () => any
? never // will never have a first argument type
: T extends ((arg1: infer U, ...args: any[]) => any)
    ? U
    : never;

export type Dictionary<T = any> = {
  [index: string]: T
}

export type AnyFunc = (...args: any[]) => any

//https://github.com/krzkaczor/ts-essentials/blob/master/lib/types.ts

//https://github.com/Microsoft/TypeScript/issues/15012

export type Required<T> = T extends object ? {[P in keyof T]-?: NonNullable<T[P]>} : T


export type Primitive = string | number | boolean | undefined | null;
/** Like Required but recursive */
export type DeepRequired<T> = T extends Primitive
  ? NonNullable<T>
  : T extends any[]
  ? DeepRequiredArray<NonNullable<T[number]>>
  : T extends {}
  ? { [K in keyof T]-?: DeepRequired<NonNullable<T[K]>> }
  : T;
interface DeepRequiredArray<T> extends Array<DeepRequired<T>> {}


export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
};

  export type DeepSimplify<T> = T extends Primitive
  ? T
  : T extends any[]
  ? DeepSimplfyArray<T[number]>
  : T extends {}
  ? { [K in keyof T]: DeepSimplify<T[K]> }
  : T;

interface DeepSimplfyArray<T> extends Array<DeepSimplify<T>> {}


  export type Simplify<T extends  {[index: string]: any}> = {[K in keyof T]: T[K]}
  /**
 * Converts a Union to Intersection
 */

 export type Extended<T extends any, K extends any = any> = T extends K ? T : never;

/**
* Creates a union from the types of an Array or tuple
*/
export type UnionOf<T extends any[]> = T[number];


export type NonNever<T extends {}> = Pick<T, { [K in keyof T]: T[K] extends never ? never : K }[keyof T]>;

export type NeverToString<T> = [T] extends [never] ? string : T

export type NeversToString<T extends {}> = { [K in keyof T]: NeverToString<T[K]>}

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
  ? I
  : never;

  export type Tuple<T = any> = [T] | T[];

