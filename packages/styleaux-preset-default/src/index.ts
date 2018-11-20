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

import {path} from '@roseys/futils'

export type Options = pxToOptions

import {MapKeys} from '@styleaux/helper-plugin-utils'

export const defaultOptions = {
  ...pxToDefaults,
  ...getThemeDefaults,
  // [TRANSFORMOPTIONKEYS.defaultLookup]: false,
  //  [TRANSFORMOPTIONKEYS.defaultTransform]: false,
  // [TRANSFORMOPTIONKEYS.keys]: {color: 'colors'},
  // [TRANSFORMOPTIONKEYS.getter]: {margin: 'pxToRem'},
  //defaultTheme: {breakpoints: {}},
  // baseFontSize: 16,
  // themeKey: 'theme',
  // breakpointsKey: 'breakpoints',
  //  alwaysTransform: false,
  // transformOptions: {
  //   defaultLookup: false,
  //   defaultTransform: false,
  //   keys: {},
  //   getter: {},
  //   functions: {},
  // },
  // responsivePOptions: {},
  // switchPOptions: {},
  // parserOptions: {},
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

  const transformStyle = createTransformStyle(getDefaultTheme, {
    ...options,
    [TRANSFORMOPTIONKEYS.functions]: {
      pxToEm,
      pxToRel,
      pxToRem,
      ...options[TRANSFORMOPTIONKEYS.functions],
    },
  })
  const transformStyleP = createTransformStyleP(transformStyle, gettheme)
  const responsive = createResponsive(
    toMq,
    options.defaultTheme.breakpoints,
    transformStyle,
  )

  const responsiveProp = createResponsiveP(
    responsive,
    gettheme('breakpoints'),
    transformStyleP,
    {},
  )
  const responsiveBool = createResponsiveBool(
    toMq,
    options.defaultTheme.breakpoints,
  )
  const responsiveBoolP = createResponsiveBoolP(
    responsiveBool,
    gettheme('breakpoints'),
    transformStyleP,
    {},
  )

  const switchProp = createSwitchProp(
    responsiveProp,
    responsiveBoolP,
    transformStyleP,
    {},
    {},
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
  })
}
export type CreateAssistantT = ReturnType<typeof CreateAssistant>

// const a = CreateAssistant()
// const b = a.toMq([{max: 2}, {handheld: true, orientation: 'landscape'}])
// const c = a.toMq([{minWidth: 1}, {handheld: true, orientation: 'landscape'}])
// const ca = a.gettheme('colors.blue')
// const p = a.responsive({value: 1, cssProp: 'Test'})
