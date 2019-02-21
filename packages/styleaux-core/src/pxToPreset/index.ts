import {
  createPxTo,
  Options as pxToOptions,
  defaultOptions as pxToDefaults,
  createPxToOptions,
} from '../pxTo'

export type Options = pxToOptions
export const defaultOptions = pxToDefaults
export const createNormalize = pxToRel => (unit = '') => (
  pxValue: string | number,
  pxBase: string | number,
) =>
  parseFloat(pxToRel(pxValue) as string) /
    parseFloat(pxToRel(pxBase) as string) +
  unit

export const createPxToPreset = (
  options: ReturnType<typeof createPxToOptions>,
) => {
  const pxTo = createPxTo(createPxToOptions(options).baseFontSize)
  const pxToEm = pxTo('em')
  const pxToRem = pxTo('rem')
  const pxToRel = pxTo()
  const normalize = createNormalize(pxToRel)
  const normalizeRem = normalize('rem')
  const normalizeEm = normalize('em')
  return Object.freeze({
    pxTo,
    pxToEm,
    pxToRem,
    pxToRel,
    normalize,
    normalizeEm,
    normalizeRem,
  })
}
export type PxToPreset = ReturnType<typeof createPxToPreset>
