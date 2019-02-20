export type Nothing = null | undefined
export type Maybe<T> = Nothing | T

export type Primitive = string | number | boolean | undefined | null
export type Dict<T, K extends string | number = string> = {[key in K]: T}

export type AnyDict = Dict<any>
export type MaybeAnyDict = Maybe<AnyDict>

export type EmptyDict = Dict<never>

export type DictValues<T> = T extends Dict<infer U> ? U : never
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export type MapKeys<T> = {[K in keyof T]: T[K]}
