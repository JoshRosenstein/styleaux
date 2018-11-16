export type MaybeT<T> = T | null | undefined

export type MaybeDic = MaybeT<Record<string, any>>
