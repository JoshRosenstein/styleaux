/**
 * Gives back an object with listed keys removed.
 * This is the opposite of `Pick`.
 * @param T the object whose properties will be removed
 * @param K the union of keys to remove from `T`
 * @returns `T` with the keys `K` removed
 */
export type Omit<T extends object, K extends keyof T | string> = Pick<
  T,
  Exclude<keyof T, K>
>;

export type Merge<FirstType extends object, SecondType> = Omit<
  FirstType,
  Extract<keyof FirstType, keyof SecondType>
> &
  SecondType;

export type NeverToUndefined<T> = [T] extends [never] ? undefined : T;

export type Args<T> = T extends () => any
  ? never // will never have a first argument type
  : T extends ((...args: infer U) => any)
  ? U
  : never;

export type Arg1<T> = T extends () => any
  ? never // will never have a first argument type
  : T extends ((arg1: infer U, ...args: any[]) => any)
  ? U
  : never;

//https://github.com/krzkaczor/ts-essentials/blob/master/lib/types.ts

//https://github.com/Microsoft/TypeScript/issues/15012

export type Required<T> = T extends object
  ? { [P in keyof T]-?: NonNullable<T[P]> }
  : T;

export type Primitive = string | number | boolean | undefined | null | bigint;
/** Like Required but recursive */
export type DeepRequired<T> = NonNullable<
  T extends any[]
    ? DeepRequiredArray<T[number]>
    : T extends {}
    ? { [P in keyof T]-?: DeepRequired<T[P]> }
    : T
>;

export interface DeepRequiredArray<T> extends Array<DeepRequired<T>> {}

export type DeepRequiredObject<T> = { [P in keyof T]-?: DeepRequired<T[P]> };

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
};

export type DeepSimplify<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? DeepSimplfyArray<T[number]>
  : T extends {}
  ? { [K in keyof T]: DeepSimplify<T[K]> }
  : T;

interface DeepSimplfyArray<T> extends Array<DeepSimplify<T>> {}

export type Simplify<T extends { [index: string]: any }> = {
  [K in keyof T]: T[K]
};
/**
 * Converts a Union to Intersection
 */

export type Extended<T extends any, K extends any = any> = T extends K
  ? T
  : never;

/**
 * Creates a union from the types of an Array or tuple
 */
export type UnionOf<T extends any[]> = T[number];

export type NonNever<T extends {}> = Pick<
  T,
  { [K in keyof T]: T[K] extends never ? never : K }[keyof T]
>;

export type StringKeys<T> = Exclude<keyof T, number | symbol>;

export type StringHack = string & { zz_IGNORE_ME?: never };

export type KeyOfOrString<Obj> = StringKeys<Obj> | StringHack;
