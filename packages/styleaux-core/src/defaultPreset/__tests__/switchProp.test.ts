import {CreateAssistant} from '../'
import {config} from './__fixtures__'

const {switchProp} = CreateAssistant(config)
const switchConfig = {
  basic: 'basicValue',
  basic2: 'basic2Value',
  basicFunc: v => v,
  basicFuncProps: (v, p) => (p.customProp ? p.customProp : v),
  basic3: 'basic2Value',
  default: 'defaultValue',
}
const CSSPROP = 'margin'

describe('SwitchProp Without Transformer', () => {
  it('[Fallsback to default] when has empty Props', () => {
    const e = switchProp(switchConfig, {cssProp: CSSPROP})({})
    const r = {[CSSPROP]: 'defaultValue'}
    expect(e).toEqual(r)
  })
  it('[Fallsback to default] when has matched props that are false or null', () => {
    const e = switchProp(switchConfig, {cssProp: CSSPROP})({
      basic: null,
      basic2: false,
    })
    const r = {[CSSPROP]: 'defaultValue'}
    expect(e).toEqual(r)
  })
  it('[Returns basicValue] when basic prop is not nill', () => {
    const e = switchProp(switchConfig, {cssProp: CSSPROP})({
      basic: '1',
    })
    const r = {[CSSPROP]: 'basicValue'}
    expect(e).toEqual(r)
  })

  it('[Matched with a Function] Returns PropValue when matched key is a basicFunc', () => {
    const e = switchProp(switchConfig, {cssProp: CSSPROP})({
      basicFunc: 'basicFuncValue',
    })
    const r = {[CSSPROP]: 'basicFuncValue'}
    expect(e).toEqual(r)
  })

  it('[Matched with a Function] allows functions with props as second argument ', () => {
    expect(
      switchProp(switchConfig, {cssProp: CSSPROP})({
        basicFuncProps: 'basicFuncValue',
      }),
    ).toEqual({[CSSPROP]: 'basicFuncValue'})

    expect(
      switchProp(switchConfig, {cssProp: CSSPROP})({
        basicFuncProps: 'basicFuncValue',
        customProp: 'customPropValue',
      }),
    ).toEqual({[CSSPROP]: 'customPropValue'})
  })

  it('[responsiveProp] doesnt passes to responsiveProp without responsive true', () => {
    const e = switchProp(switchConfig, {
      cssProp: CSSPROP,
      responsive: false,
    })({
      basicFunc: [1, 2],
    })

    const e2 = switchProp(switchConfig, {
      cssProp: CSSPROP,
    })({
      basicFunc: [1, 2],
    })

    const r = {[CSSPROP]: [1, 2]}

    expect(e).toEqual(r)
    expect(e2).toEqual(r)
  })

  it('[responsiveProp] passes to responsiveProp if responsive true', () => {
    const e = switchProp(switchConfig, {
      cssProp: CSSPROP,
      responsive: true,
    })({
      basicFunc: [1, 2],
    })

    const r = {'@media screen and (min-width:1BP_Test)': {margin: 2}, margin: 1}

    expect(e).toEqual(r)
  })

  it('[responsiveBoolProp] passes to responsiveBoolProp if responsiveBool true', () => {
    const e = switchProp(switchConfig, {
      cssProp: CSSPROP,
      responsiveBool: true,
    })({
      basic: [false, true],
    })

    const r = {
      '@media screen and (min-width:1BP_Test)': {[CSSPROP]: 'basicValue'},
    }

    expect(e).toEqual(r)
  })
})
