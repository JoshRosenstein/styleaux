import {path} from '@roseys/futils'
import {isString, isArray} from 'typed-is'
import {IDictionary} from '../types'

export type Options = {
  [x: string]: any
  themeKey?: string
  defaultTheme?: IDictionary
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
  } else if (isString(themePropKey)) {
    pth = `${themeKey}.${themePropKey}`
  }

  return path(pth, props) || path(themePropKey as any, defaultTheme)
}

export type GetTheme = ReturnType<typeof createGetTheme>
