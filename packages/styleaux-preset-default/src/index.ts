import {createToMq} from '@styleaux/plugin-tomq'
import {
  createGetTheme,
  defaultOptions as getThemeDefaults,
  Options as getThemeOptions,
} from '@styleaux/plugin-gettheme'

import {
  createTransformStyleP,
  createTransformStyle,
  transformStyleOptions,
  OPTIONSKEYS as TRANSFORMOPTIONKEYS,
} from '@styleaux/plugin-transformstyle'
import {
  createResponsive,
  createResponsiveP,
  createResponsiveBool,
  createResponsiveBoolP,
} from '@styleaux/plugin-responsive'

import {
  createPxToPresents,
  Options as pxToOptions,
  defaultOptions as pxToDefaults,
} from '@styleaux/preset-pxto'
import {createSwitchProp} from '@styleaux/plugin-switchProp'
import {createParse} from '@styleaux/plugin-parse'
import {path} from '@roseys/futils'

export type Options = pxToOptions

import {MapKeys} from '@styleaux/helper-plugin-utils'

export const defaultOptions = {
  ...pxToDefaults,
  ...getThemeDefaults,
}

type O = MapKeys<pxToOptions & transformStyleOptions & getThemeOptions>

export const CreateAssistant = (options: O = defaultOptions) => {
  const {
    pxTo,
    pxToEm,
    pxToRel,
    pxToRem,
    normalize,
    normalizeEm,
    normalizeRem,
  } = createPxToPresents(options)
  const getDefaultTheme = (v: string | (string | number)[]) =>
    path(v, options.defaultTheme)

  const toMq = createToMq(pxToEm)
  const gettheme = createGetTheme(options)
  const transformerFuncs = {
    pxToEm,
    pxToRel,
    pxToRem,
    self: x => x,
    ...options[TRANSFORMOPTIONKEYS.functions],
  }
  const transformStyle = createTransformStyle(getDefaultTheme, {
    ...options,
    [TRANSFORMOPTIONKEYS.functions]: transformerFuncs,
  })
  const transformStyleP = createTransformStyleP(transformStyle, gettheme)
  const responsive = createResponsive(
    toMq,
    options.defaultTheme.breakpoints,
    transformStyle,
  )
  const breakpointsP = (key?: string) =>
    gettheme(['breakpoints', key].filter(Boolean))
  const responsiveProp = createResponsiveP(
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
    parse
  })
}
export type CreateAssistantT = ReturnType<typeof CreateAssistant>

// const a = CreateAssistant()
// const b = a.toMq([{max: 2}, {handheld: true, orientation: 'landscape'}])
// const c = a.toMq([{minWidth: 1}, {handheld: true, orientation: 'landscape'}])
// const ca = a.gettheme('colors.blue')
// const p = a.responsive({value: 1, cssProp: 'Test'})
