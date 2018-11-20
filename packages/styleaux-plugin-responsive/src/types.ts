import {Dict, Maybe} from '@styleaux/helper-plugin-utils'

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

export type Breakpoints = Dict<number | string> | (number | string)[]

export type ToMq = (x: any) => string

export type TransformStyle = (
  {value}: {[index: string]: any; value: any},
) => (props: any) => any

export type InputMaybe<B> = Maybe<
  BreakPointKeysOfNumberOrString<B> | string | number
>
