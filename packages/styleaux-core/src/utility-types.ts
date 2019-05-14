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

export type OmitIf<T extends object, K extends keyof any> = K extends keyof T
  ? Omit<T, K>
  : T;

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

export type Dictionary<T = any> = {
  [index: string]: T;
};

export type AnyFunc = (...args: any[]) => any;

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

export type DeepSimplify<T> = T extends Primitive
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

export type NeverToString<T> = [T] extends [never] ? string : T;

export type NeversToString<T extends {}> = {
  [K in keyof T]: NeverToString<T[K]>
};

export type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never;

export type Tuple<T = any> = [T] | T[];

export type Diff<T extends object, U extends object> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>;

export type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;

/**
 * SetDifference (same as Exclude)
 * @desc Set difference of given union types `A` and `B`
 * @example
 *   // Expect: "1"
 *   SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: string | number
 *   SetDifference<string | number | (() => void), Function>;
 */

export type SetDifference<A, B> = A extends B ? never : A;

type TRUE = 1;
type FALSE = 0;

export type BothArray<A, B> = A extends any[]
  ? B extends any[]
    ? TRUE
    : FALSE
  : FALSE;

export type BothObj<A, B> = A extends any[]
  ? B extends {}
    ? TRUE
    : FALSE
  : FALSE;

export type MapDiff<A, B> = A extends {}
  ? B extends {}
    ? { [P in keyof A]: A[P] }
    : FALSE
  : FALSE;

type Valueof<A> = A extends any[] ? A[number] : never;

type DiffArray<
  A,
  B,
  R = {
    ERROR: 'Difference in Array';
    A: SetDifference<Valueof<A>, Valueof<B>>;
    B: SetDifference<Valueof<B>, Valueof<A>>;
  }
> = SetDifference<Valueof<A>, Valueof<B>> extends never
  ? SetDifference<Valueof<B>, Valueof<A>> extends never
    ? never
    : R
  : R;

export type DeepDiff<A, B> = BothArray<A, B> extends TRUE
  ? DiffArray<A, B>
  : BothObj<A, B> extends TRUE
  ? MapDiff<A, B>
  : A;

export type Has<T, U> = IsAny<T> extends TRUE
  ? TRUE
  : IsAny<U> extends TRUE
  ? FALSE
  : Extract<T, U> extends never
  ? FALSE
  : TRUE;

export type IsUnknown<T> = IsNever<T> extends TRUE
  ? FALSE
  : (T extends unknown
      ? unknown extends T
        ? /* catch any type */ T extends string
          ? FALSE
          : TRUE
        : FALSE
      : FALSE);

export type IsAny<T> = IsUnknown<T> extends TRUE
  ? TRUE
  : IsNever<T> extends true
  ? FALSE
  : [T] extends [any]
  ? [any] extends [T]
    ? TRUE
    : FALSE
  : FALSE;
export type IsNever<T> = [T] extends [never] ? true : false;
export type IsExtends<T, U> = T extends U ? true : false;
export type Infer<T> = [T] extends [infer R] ? R : never;
