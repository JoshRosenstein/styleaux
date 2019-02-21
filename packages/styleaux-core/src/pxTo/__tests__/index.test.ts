import {createPxTo} from '../'

// const validData = [[1, 2, 3], []]

// const invalidData = [
//   new Map(),
//   new Set(),
//   [].slice,
//   0,
//   undefined,
//   null,
//   {a: 1},
//   1,
//   NaN,
//   'a',
//   'true',
//   'false',
// ]
// const data = [
//   ...validData.map(v => [v, true]),
//   ...invalidData.map(v => [v, false]),
// ]

// test.each(data)('isArray(%o) === %o', (value, expected) => {
//   expect(isArray(value)).toBe(expected)
// })
const pxTo = createPxTo(16)
const pxToEm = pxTo('em')
const pxToRem = pxTo('rem')
const pxToPct = pxValue => pxTo('%')(pxValue * 100)
const pxToRelative = pxTo()
///

describe('With baseFontSize 16', () => {
  it('Works ', () => {
    expect(pxToEm(16)).toEqual('1em')
    expect(pxToRem(16)).toEqual('1rem')
    expect(pxToPct(16)).toEqual('100%')
    expect(pxToRelative(16)).toEqual(1)
  })
})

describe('With baseFontSize 18', () => {
  const pxTo = createPxTo(18)
  const pxToEm = pxTo('em')
  const pxToRem = pxTo('rem')
  const pxToPct = pxValue => pxTo('%')(pxValue * 100)
  const pxToRelative = pxTo()

  it('Works ', () => {
    expect(pxToEm(18)).toEqual('1em')
    expect(pxToRem(18)).toEqual('1rem')
    expect(pxToPct(18)).toEqual('100%')
    expect(pxToRelative(18)).toEqual(1)
  })
})
