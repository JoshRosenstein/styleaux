// @flow
export type OptionsT<M extends PropertyKey> = {
  toMq?: {valueConverter?: Function | M}
}

export type toMqInputAsObj = {
  min?: string | number
  max?: string | number
  minW?: string | number
  maxW?: string | number
  minH?: string | number
  maxH?: string | number
  'max-width'?: string | number
  'max-height'?: string | number
  'min-width'?: string | number
  'min-height'?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  handheld?: boolean
  screen?: boolean
  print?: boolean
  all?: boolean
  orientation?: 'landscape' | 'portrait'
}

type UnionKeyToValue<U extends string, T> = {[K in U]: T}
type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends {[_ in keyof T]: infer U}
  ? U
  : never

type MapString<T> = {
  [key: string]: T
}
type MapNumber<T> = {
  [key: string]: T
}
type U2<K extends string, T> = Merge<UnionKeyToValue<K, T>, MapString<T>>
type Merge<A, B> = MapKeys<(A) & (B)>
type MapKeys<T> = {[K in keyof T]: T[K]}
