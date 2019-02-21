import pxTo from './pxTo'

const BASEFONTSIZE = 'baseFontSize'

export type o = 'baseFontSize' | 'optionalNumber'

export const O: UnionKeyToValue1<o> = {
  baseFontSize: 'baseFontSize',
  optionalNumber: 'optionalNumber',
}

type UnionKeyToValue1<U extends string> = {[K in U]: K}

export type Options = {
  baseFontSize?: number
}

export const defaultOptions = {
  baseFontSize: 16,
}

export const optionKeys = Object.keys(defaultOptions)

export type OptionsKeys = keyof Options

export const createPxTo = (options?: Options) => {
  return pxTo(options[BASEFONTSIZE] | 16)
}

export type CreatePxTo = ReturnType<typeof createPxTo>

export default createPxTo
