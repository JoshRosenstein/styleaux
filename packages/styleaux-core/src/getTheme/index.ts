import {path} from '@roseys/futils'
import {isString} from 'typed-is'
import {Dict, Maybe} from '../types'

export type Options = {
  [x: string]: any
  themeKey?: string
  defaultTheme?: Dict<any>
}

export const defaultOptions = {
  themeKey: 'theme',
  defaultTheme: {
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
}

export const createGetTheme = ({themeKey = 'theme', defaultTheme}: Options) => (
  themePropKey: string | Array<number | string>,
) => (props: Maybe<Dict<any>>) => {
  // return path(themePropKey, defaultTheme)
  const pth = isString(themePropKey)
    ? `${themeKey}.${themePropKey}`
    : [themeKey, ...themePropKey]

  const res = path(pth, props) || path(themePropKey, defaultTheme)
  //as ReturnT : MaybeT<ReturnT>
  return res //as MaybeT<ReturnT>
}

export type GetTheme = ReturnType<typeof createGetTheme>