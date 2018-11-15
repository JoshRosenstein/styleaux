import {createToMq} from '@styleaux/plugin-tomq'

import {
  createPxToPresents,
  Options as pxToOptions,
  defaultOptions as pxToDefaults,
} from './pxToPresent'

export type Options = pxToOptions

const defaultOptions = {
  ...pxToDefaults,
  // defaultTheme: {},
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

export const CreateAssistant = (options = defaultOptions) => {
  const pxToPresents = createPxToPresents(options)
  const toMq = createToMq(pxToPresents.pxToEm)
  return Object.freeze({
    ...pxToPresents,
    toMq,
  })
}
export type CreateAssistantT = ReturnType<typeof CreateAssistant>

const a = CreateAssistant()
const b = a.toMq([{max: 2}, {handheld: true, orientation: 'landscape'}])
const c = a.toMq([{minWidth: 1}, {handheld: true, orientation: 'landscape'}])
