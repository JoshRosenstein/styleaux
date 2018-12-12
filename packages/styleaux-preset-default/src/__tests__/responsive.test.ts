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

describe(' Basic responsiveProp', () => {
  it('Returns Target Value', () => {
    const t = responsiveProp({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      prop: 'Target',
      transform: false,
    })({Target: 'targetPropValue'})

    const e = {paddingTop: 'targetPropValue'}

    expect(t).toEqual(e)
  })

  it('[ArrayProp] Returns Target Value ', () => {
    const t = responsiveProp({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      prop: 'Target',
      transform: false,
    })({Target: ['targetPropValue']})

    const e = {paddingTop: 'targetPropValue'}

    expect(t).toEqual(e)
  })

  it('[ObjectProp] Returns Target Value ', () => {
    const t = responsiveProp({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      prop: 'Target',
      transform: false,
    })({Target: {default: 'targetPropValue'}})

    const e = {paddingTop: 'targetPropValue'}

    expect(t).toEqual(e)
  })

  // it('Returns defaultValue if False', () => {
  //   const t = responsiveProp({
  //     cssProp: 'paddingTop',
  //     defaultValue: '16px',
  //     prop: 'Target',
  //   })({Target: false})

  //   const e = {paddingTop: '16px'}

  //   expect(t).toEqual(e)
  // })

  // it('[ArrayProp] Returns defaultValue if False ', () => {
  //   const t = responsiveProp({
  //     cssProp: 'paddingTop',
  //     defaultValue: '16px',
  //     prop: 'Target',
  //     transform: false,
  //   })({Target: [false]})

  //   const e = {paddingTop: '16px'}

  //   expect(t).toEqual(e)
  // })

  it('[ObjectProp] Returns Target Value ', () => {
    const t = responsiveProp({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      prop: 'Target',
    })({Target: {default: 'targetPropValue'}})

    const e = {paddingTop: 'targetPropValue'}

    expect(t).toEqual(e)
  })

  it('Returns defaultValue if undefined', () => {
    const t = responsiveProp({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      prop: 'Target',
    })({Target: undefined})

    const e = {paddingTop: '16px'}

    expect(t).toEqual(e)
  })

  it('Returns Target Value', () => {
    const t = responsiveProp({
      cssProp: 'fontSize',
      transform: true,
    })({fontSize: 'targetPropValue'})

    const e = {fontSize: 'targetPropValue'}

    expect(t).toEqual(e)
  })
})