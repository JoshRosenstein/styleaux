import {Properties} from '@roseys/csstype'

export type CSSPropertyKeys = keyof Properties

export type GlobalCssValues = 'inherit' | 'initial' | 'unset'

export type Omit<ObjectType, KeysType extends keyof ObjectType> = Pick<
  ObjectType,
  Exclude<keyof ObjectType, KeysType>
>

export type Merge<FirstType, SecondType> = Omit<
  FirstType,
  Extract<keyof FirstType, keyof SecondType>
> &
  SecondType

export type NeverToUndefined<T> = [T] extends [never] ? undefined : T

export type Arg1<T> = T extends (arg1: infer U, ...args: any[]) => any
  ? U
  : undefined

export type Dictionary<T = any> = {
  [index: string]: T
}

export type AnyFunc = (...args: any[]) => any


//https://github.com/Microsoft/TypeScript/issues/15012

export type Required<T> = T extends object ? {[P in keyof T]-?: NonNullable<T[P]>} : T


export type DeepRequired<
  T,
  U extends object | undefined = undefined
> = T extends object
  ? {
      [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function>
        ? NonNullable<T[P]>
        : DeepRequired<NonNullable<T[P]>, U>
    }
  : T

  export type DeepPartial<
  T,
  U extends object | undefined = undefined
> = T extends object
  ? {
      [P in keyof T]?: NonNullable<T[P]> extends NonNullable<U | Function>
        ? NonNullable<T[P]>
        : DeepPartial<NonNullable<T[P]>, U>
    }
  : T

  export type DeepSimplify<
  T,
  U extends object | undefined = undefined
> = T extends object
  ? {
      [P in keyof T]: T[P] extends U | Function
        ? T[P]
        : DeepSimplify<T[P], U>
    }
  : T

  export type Simplify<T extends object> = {[K in keyof T]: T[K]}
  /**
 * Converts a Union to Intersection
 */
 export  type UnionToIntersection<U> =
 (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never
 export type Extended<T extends any, K extends any = any> = T extends K ? T : never;

/**
* Creates a union from the types of an Array or tuple
*/
export type UnionOf<T extends any[]> = T[number];

export type StringKeyOf<T extends any> = Extract<keyof T, string>;

export type StringKeyInArray<a extends any[]> = StringKeyOf<UnionOf<a>>;

let g: StringKeyInArray<[{
  f: 1;
}, {
  g: 2;
}]>;

