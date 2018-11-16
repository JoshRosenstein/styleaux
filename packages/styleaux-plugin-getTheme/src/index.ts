import {path} from '@roseys/futils'
import {isString} from 'typed-is'

export type Options = Partial<{
  themeKey: string
  defaultTheme: Object
}>

export const defaultOptions = {
  themeKey: 'theme',
  defaultTheme: {},
}
type MaybeT<T> = T | null | undefined
export const createGetTheme = ({themeKey = 'theme', defaultTheme}: Options) => <
  ReturnT = any,
  T = {[index: string]: any}
>(
  themePropKey: string | Array<number | string>,
) => (props: Record<typeof themeKey, T>) => {
  // return path(themePropKey, defaultTheme)
  const pth = isString(themePropKey)
    ? `${themeKey}.${themePropKey}`
    : [themeKey, ...themePropKey]

  const res = path(pth, props) || path(themePropKey, defaultTheme)
  //as ReturnT : MaybeT<ReturnT>
  return res as MaybeT<ReturnT>
}

export type GetTheme = ReturnType<typeof createGetTheme>

// const {
//   pxTo,
//   pxToEm,
//   pxToRem,
//   pxToRel,
//   normalize,
//   normalizeEm,
//   normalizeRem,
// } = createPxToPresents()
