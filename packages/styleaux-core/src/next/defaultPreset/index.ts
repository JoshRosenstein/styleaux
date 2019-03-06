import {createToMq} from '../../toMq'
import {createGetTheme, defaultOptions as getThemeDefaults} from '../../getTheme'

import {
  createTransformStyleP,
  createTransformStyle,
  OPTIONSKEYS as TRANSFORMOPTIONKEYS,
} from '../../transformStyle'
import {
  createResponsive,
  createResponsiveP,
  createResponsiveBool,
  createResponsiveBoolP,
} from '../../responsive'

//import {IBreakpoints} from '../responsive/types'

import {
  createPxToPreset,
  Options as pxToOptions,
  defaultOptions as pxToDefaults,
} from '../pxToPreset'

import {createSwitchProp} from '../switchProp'
import {createParse} from '../parse'
import {path} from '@roseys/futils'
import {IDictionary} from '../types'

export type Options = pxToOptions

//import {MapKeys} from '../types'

export const defaultOptions = {
  ...pxToDefaults,
  ...getThemeDefaults,

  [TRANSFORMOPTIONKEYS.defaultLookup]: true,
  [TRANSFORMOPTIONKEYS.defaultTransform]: true,
}

//type O = MapKeys<pxToOptions & transformStyleOptions & getThemeOptions>
type ICreateAssistantConfig<DF, BP> = {
  baseFontSize: number
  defaultTheme: DF & {breakpoints?: BP}
  [index: string]: any
}
export const CreateAssistant = <
  DT extends IDictionary,
  BP,
  T extends ICreateAssistantConfig<DT, BP>
>(
  options: T,
) => {
  options = Object.assign(defaultOptions, options)
  const {
    pxTo,
    pxToEm,
    pxToRel,
    pxToRem,
    normalize,
    normalizeEm,
    normalizeRem,
  } = createPxToPreset(options)
  const getDefaultTheme = (v: string | (string | number)[]) =>
    path(v, options.defaultTheme)

  const toMq = createToMq(pxToEm)
  const gettheme = createGetTheme(options.defaultTheme)
  const transformerFuncs = {
    pxToEm,
    pxToRel,
    pxToRem,
    self: x => x,
    ...options[TRANSFORMOPTIONKEYS.functions],
  }
  const transformStyle = createTransformStyle(getDefaultTheme, {
    ...(options as any),
    [TRANSFORMOPTIONKEYS.functions]: transformerFuncs,
  })
  const transformStyleP = createTransformStyleP(transformStyle, gettheme)
  const responsive = createResponsive(
    toMq,
    options.defaultTheme.breakpoints,
    transformStyle,
  )
  const breakpointsP = (key?: string): any =>
    gettheme(['breakpoints', key].filter(Boolean))

  const responsiveProp = createResponsiveP<DT, BP>(
    responsive,
    breakpointsP(),
    transformStyleP,
    {},
  )
  const responsiveBool = createResponsiveBool(
    toMq,
    options.defaultTheme.breakpoints,
  )
  const responsiveBoolP = createResponsiveBoolP(
    responsiveBool,
    breakpointsP(),
    transformStyleP,
    {},
  )

  const switchProp = createSwitchProp(
    responsiveProp,
    responsiveBoolP,
    transformStyleP,
    transformerFuncs,
    {transform: false},
  )
  const parse = createParse(
    switchProp,
    toMq,
    breakpointsP,
    responsiveProp,
    options,
  )

  return Object.freeze({
    getDefaultTheme,
    pxTo,
    pxToEm,
    pxToRel,
    pxToRem,
    normalize,
    normalizeEm,
    normalizeRem,
    toMq,
    transformStyle,
    transformStyleP,
    responsive,
    responsiveProp,
    gettheme,
    switchProp,
    parse,
  })
}
export type CreateAssistantT = ReturnType<typeof CreateAssistant>

// const a = CreateAssistant()
// const b = a.toMq([{max: 2}, {handheld: true, orientation: 'landscape'}])
// const c = a.toMq([{minWidth: 1}, {handheld: true, orientation: 'landscape'}])
// const ca = a.gettheme('colors.blue')
// const p = a.responsive({value: 1, cssProp: 'Test'})
