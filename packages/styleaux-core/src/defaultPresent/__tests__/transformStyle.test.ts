import {CreateAssistant, defaultOptions} from '../'
import {config} from './__fixtures__'

const {
  toMq,
  pxTo,
  pxToEm,
  pxToRel,
  pxToRem,
  transformStyle,
  transformStyleP,
  responsive,
  responsiveProp,
} = CreateAssistant(config)

describe('transformStyle', () => {
  it('Works ', () => {
    const e = transformStyle({
      value: 'sm',
      cssProp: 'margin',

      path: 'space',
    })
    const r = {margin: '0.5rem'}

    expect(e).toEqual(r)
  })
  it('References Getter Dictionary ', () => {
    const e = transformStyle({
      cssProp: 'marginTop',
      value: 16,

      path: 'space',
      postFn: 'pxToRem',
    })
    const r = {marginTop: '1rem'}

    expect(e).toEqual(r)
  })
})
