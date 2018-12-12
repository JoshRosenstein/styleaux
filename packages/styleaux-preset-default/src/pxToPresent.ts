import {createPxTo} from '@styleaux/plugin-pxto'

export type Options = Partial<{
  [index: string]: any
  baseFontSize?: number
}>
export const defaultOptions = {
  baseFontSize: 16,
}

const createNormalize = pxToRel => (unit = '') => (
  pxValue: string | number,
  pxBase: string | number,
) =>
  parseFloat(pxToRel(pxValue) as string) /
    parseFloat(pxToRel(pxBase) as string) +
  unit

export const createPxToPresents = (options: Options = defaultOptions) => {
  const pxTo = createPxTo(options)
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
export type PxToPresents = ReturnType<typeof createPxToPresents>
