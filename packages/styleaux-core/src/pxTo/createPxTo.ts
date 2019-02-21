import pxTo from './pxTo'
import {DEFAULT_BASE} from './constants'

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

export const createPxToOptions = ({baseFontSize = DEFAULT_BASE}) => ({
  baseFontSize,
})

export const optionKeys = Object.keys(defaultOptions)

export type OptionsKeys = keyof Options

export const createPxTo = (baseFontSize = DEFAULT_BASE) => {
  return pxTo(baseFontSize)
}

export type CreatePxTo = ReturnType<typeof createPxTo>

export default createPxTo
