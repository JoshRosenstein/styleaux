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
        : DeepPartial<T[P], U>
    }
  : T
