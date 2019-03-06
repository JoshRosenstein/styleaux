import {
  createResponsive,
  createResponsiveP,
  createToMq,
  createPxTo,
  createTransformStyle,
  createTransformStyleP,
  createGetTheme,
} from '../../..'
import {IRemValue, IEmValue} from '@johanneslumpe/css-types'

import {path} from '@roseys/futils'

import {IBreakPoints, theme, IthemeS} from './theme'

export const pxTo = createPxTo(16)
export const pxToRem = pxTo<IRemValue>('rem')
export const pxToEm = pxTo<IEmValue>('em')
export const toMq = createToMq(pxToEm)

export const getTheme = createGetTheme(theme)

export const getColor = (color: keyof IthemeS['colors']) =>
  getTheme('colors.' + color)

export const getSpace = (space: keyof IthemeS['space']) =>
  getTheme('space.' + space)

export const getDefaultTheme = (v: string | (string | number)[]) =>
  path(v, theme)

export const transformStyle = createTransformStyle(getDefaultTheme, {
  autoLookupTheme: false,
  autoLookupTransformer: false,
  cssPropToFunctionMap: undefined,
  cssPropToThemeKeyMap: undefined,
  transformers: {pxTo, pxToRem, pxToEm, toMq},
})
export const transformStyleP = createTransformStyleP(transformStyle, getTheme)

export const responsive = createResponsive(
  toMq,
  theme.breakpoints,
  transformStyle,
)

export const style = createResponsiveP<IthemeS, IBreakPoints>(
  responsive,
  getTheme('breakpoints'),
  transformStyleP,
)
//type SpaceKeys = keyof IthemeS['space']
