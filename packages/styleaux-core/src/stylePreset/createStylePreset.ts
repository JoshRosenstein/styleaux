import {path} from '@roseys/futils'
import {createToMq} from '../toMq'
import {createGetTheme, createGetThemeOptions} from '../getTheme'
import {
  createTransformStyleP,
  createTransformStyle,
  createTransformStyleOptions,
} from '../transformStyle'
import {
  createResponsive,
  createResponsiveP,
  creatResponsiveOptions,
} from '../responsive'
import {createAsResponsive} from './createAsResponsive'
import {createPxTo, createPxToOptions} from '../pxTo'

export type ICreateStylePresetOptions = Partial<
  ReturnType<typeof createPxToOptions> &
    ReturnType<typeof createGetThemeOptions> &
    ReturnType<typeof createTransformStyleOptions> &
    ReturnType<typeof creatResponsiveOptions>
>

const DEFAULT_BP = {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
//import {MapKeys} from '../types'
export const createStylePresetOptions = (
  options: ICreateStylePresetOptions,
) => ({
  ...createPxToOptions(options),
  ...createGetThemeOptions(options),
  ...createTransformStyleOptions({
    autoLookupTheme: true,
    autoLookupTransformer: true,

    ...options,
  }),
  ...creatResponsiveOptions({
    defaultBreakPoints: options.defaultBreakPoints || DEFAULT_BP,
  }),
})

//type O = MapKeys<pxToOptions & transformStyleOptions & getThemeOptions>

export const createStylePreset = (options: ICreateStylePresetOptions) => {
  options = createStylePresetOptions(options)

  const pxTo = createPxTo(options.baseFontSize)
  const pxToEm = pxTo('em')
  const pxToRem = pxTo('rem')
  const pxToRel = pxTo()

  const defaultTheme = {
    breakpoints: options.defaultBreakPoints,
    ...options.defaultTheme,
  }

  const getDefaultTheme = (v: string | (string | number)[]): any =>
    path(v, defaultTheme)

  const toMq = createToMq(pxToEm)

  const gettheme = createGetTheme(defaultTheme, options.themeKey)

  const transformers = {
    pxToEm,
    pxToRel,
    pxToRem,
    ...options.transformers,
  }

  const transformStyle = createTransformStyle(getDefaultTheme, {
    cssPropToFunctionMap: options.cssPropToFunctionMap,
    cssPropToThemeKeyMap: options.cssPropToThemeKeyMap,
    autoLookupTheme: options.autoLookupTheme,
    autoLookupTransformer: options.autoLookupTransformer,
    transformers,
  })

  const transformStyleP = createTransformStyleP(transformStyle, gettheme)

  const responsive = createResponsive(
    toMq,
    defaultTheme.breakpoints,
    transformStyle,
  )

  const responsiveProp = createResponsiveP(
    responsive,
    gettheme('breakpoints'),
    transformStyleP,
    {},
  )

  const style = createAsResponsive(responsiveProp)

  return Object.freeze({
    style,
    getDefaultTheme,
    pxTo,
    pxToEm,
    pxToRel,
    pxToRem,
    toMq,
    transformStyle,
    transformStyleP,
    responsive,
    responsiveProp,
    gettheme,
  })
}

// const a = CreateAssistant()
// const b = a.toMq([{max: 2}, {handheld: true, orientation: 'landscape'}])
// const c = a.toMq([{minWidth: 1}, {handheld: true, orientation: 'landscape'}])
// const ca = a.gettheme('colors.blue')
// const p = a.responsive({value: 1, cssProp: 'Test'})
