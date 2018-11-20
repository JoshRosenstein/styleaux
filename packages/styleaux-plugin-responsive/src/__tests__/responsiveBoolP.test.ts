import {createResponsiveBoolP} from '../'
import {createResponsiveBool} from '../'
import {Breakpoints} from '../types'

const toMq = x => `@media ${x}`

describe('Default Breakpoints as Array', () => {
  const breakpoints = [1, 2, 4]
  const getBreakpoints = <T extends Breakpoints>(props: {
    theme?: {breakpoints?: T}
  }): T | typeof breakpoints =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsiveBool = createResponsiveBool(toMq, [1, 2, 4])
  const responsiveP = createResponsiveBoolP(
    responsiveBool,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )
  it('Works ', () => {
    const a = responsiveP({
      cssProp: 'paddingTop',
      T: '1',
    })({paddingTop: true})
    expect(a).toEqual({paddingTop: '1'})
  })

  it('Works Array ', () => {
    const b = responsiveP({
      cssProp: 'paddingTop',
      T: 1,
      F: 2,
    })({
      paddingTop: [true, false],
    })
    expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
  })

  it('Works Default Value ', () => {
    const b = responsiveP({
      cssProp: 'paddingTop',
      defaultValue: true,
      T: '16px',
    })({})

    expect(b).toEqual({paddingTop: '16px'})
  })
})

describe('Default Breakpoints as Object', () => {
  const responsive = createResponsiveBool(toMq, {sm: 1, md: 2, lg: 4})
  const breakpoints = {sm: 1, md: 2, lg: 4}
  const getBreakpoints = <T extends Breakpoints>(props: {
    theme?: {breakpoints?: T}
  }): T | typeof breakpoints =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsiveBool = createResponsiveBool(toMq, [1, 2, 4])
  const responsiveP = createResponsiveBoolP(
    responsiveBool,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )

  describe('Values can be in Array', () => {
    it('Works ', () => {
      const a = responsiveP({
        cssProp: 'paddingTop',
        T: '1',
      })({paddingTop: true})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        T: 1,
        F: 2,
      })({paddingTop: [true, false]})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        T: '16px',
        defaultValue: true,
      })({})
      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsiveP({
        cssProp: 'paddingTop',
        T: '1',
      })({paddingTop: {default: true}})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        T: 1,
        F: 2,
      })({paddingTop: {default: true, sm: false}})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        T: '16px',
        defaultValue: {default: true},
      })({})
      expect(b).toEqual({paddingTop: '16px'})
    })
  })
})
