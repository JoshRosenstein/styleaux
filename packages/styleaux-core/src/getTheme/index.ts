import {path} from '@roseys/futils'
import {isString, isNumber, isArray, isNil} from 'typed-is'
import {IDictionary} from '../types'

export type Options = {
  [x: string]: any
  themeKey?: string
  defaultTheme?: IDictionary
}

const THEMEKEY = 'theme'

export interface IDictionaryB<
  T = IDictionary<string | number> | Array<string | number>
> {
  breakpoints?: T
}

export interface ICreateGetThemeOptionsInput<T extends IDictionary> {
  themeKey?: string
  defaultTheme: T
}

export interface IGetThemeOptions {
  themeKey?: string
  defaultTheme?: IDictionary
}

export const createGetThemeOptions = ({
  themeKey = THEMEKEY,
  defaultTheme = {},
}): IGetThemeOptions => ({
  themeKey,
  defaultTheme,
})

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

/**
 * Creates a theme lookup function that fallsback to an optional default theme so a theme does not need to have a theme passed to it
 */
export const createGetTheme = <T extends IDictionary, T2 extends IDictionary>(
  defaultTheme = {} as T,
  themeKey = 'theme',
) => (
  themePropKey: keyof T | keyof T2 | string | Array<number | string>,
) => (props: {theme?: T2}) => {
  let pth
  if (isArray(themePropKey)) {
    pth = [themeKey, ...themePropKey]
  } else if (isString(themePropKey) || isNumber(themePropKey)) {
    pth = `${themeKey}.${themePropKey}`
  }

  /// Use to have || statement but need to check undefined due to 0 values in theme
  // return path(pth, props) || path(themePropKey as any, defaultTheme)
  const res = path(pth, props)
  return !isNil(res) ? res : path(themePropKey as any, defaultTheme)
}

export type GetTheme = ReturnType<typeof createGetTheme>
