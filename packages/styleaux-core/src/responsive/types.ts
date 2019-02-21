import {Dict, Maybe} from '../types'

export type BreakPointKeysOFT<B, T> = B extends Dict<any>
  ? Partial<Record<keyof B | 'default', T>> | (T)[]
  : B extends any[]
  ? (T)[]
  : never

export type BreakPointKeysOfNumberOrString<B> = BreakPointKeysOFT<
  B,
  number | string
>

export type MaybeInputNumberOrString<B> = Maybe<
  BreakPointKeysOfNumberOrString<B> | string | number
>

export type IBreakpoints = Dict<number | string> | (number | string)[]

export type ToMq = (x: any) => string

export type TransformStyle = (
  {value}: {[index: string]: any; value: any},
) => (props: any) => any

export type InputMaybe<B> = Maybe<
  BreakPointKeysOfNumberOrString<B> | string | number
>

// type ValueTypes<T> = T extends Dict<number | string>
//   ? Partial<Record<keyof T | 'default', number | string>> | (number | string)[]
//   : never
