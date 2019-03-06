import {createPxToPreset} from '../'

const {
  //pxTo,
  pxToEm,
  pxToRem,
  pxToRel,
  normalize,
  normalizeEm,
  normalizeRem,
} = createPxToPreset({baseFontSize: 16})

it('Works ', () => {
  expect(pxToEm(16)).toEqual('1em')
  expect(pxToRem(16)).toEqual('1rem')
  //expect(pxToPct(16)).toEqual('100%')
  expect(pxToRel(16)).toEqual(1)

  expect(normalize('em')(16, 16)).toEqual('1em')

  expect(normalizeEm(16, 16)).toEqual('1em')
  expect(normalizeEm(pxToEm(16), '1em')).toEqual('1em')
  expect(normalizeEm(pxToEm(8), '1em')).toEqual('0.5em')
  expect(normalizeEm(8, '1em')).toEqual('0.5em')

  expect(normalizeRem(16, 16)).toEqual('1rem')
  expect(normalizeRem(pxToRem(16), '1em')).toEqual('1rem')
  expect(normalizeRem(pxToRem(8), '1em')).toEqual('0.5rem')
  expect(normalizeRem(8, '1em')).toEqual('0.5rem')
})
