import {createResponsiveP} from '../'
import {createResponsive} from '../'

const toMq = x => `@media ${x}`

describe('Default Breakpoints as Array', () => {
  const breakpoints = [1, 2, 4]
  const getBreakpoints = props =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsive = createResponsive(toMq, [1, 2, 4])
  const responsiveP = createResponsiveP(
    responsive,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )

  it('Works ', () => {
    const a = responsiveP({
      cssProp: 'paddingTop',
      defaultValue: '16px',
    })({paddingTop: '1'})
    expect(a).toEqual({paddingTop: '1'})
  })

  it('Works Array ', () => {
    const b = responsiveP({
      cssProp: 'paddingTop',
      defaultValue: '16px',
    })({paddingTop: [1, 2]})
    expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
  })

  it('Works Default Value ', () => {
    const b = responsiveP({
      cssProp: 'paddingTop',
      defaultValue: '16px',
      value: undefined,
    })({paddingTop: undefined})
    expect(b).toEqual({paddingTop: '16px'})
  })
})

describe('Default Breakpoints as Object', () => {
  const breakpoints = {sm: 1, md: 2, lg: 4}
  const getBreakpoints = props =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsive = createResponsive(toMq, breakpoints)
  const responsiveP = createResponsiveP(
    responsive,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )

  describe('Values can be in Array', () => {
    it('Works ', () => {
      const a = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: '1', b: 1})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: [1, 2]})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({})
      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: {default: '1'}})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: {default: 1, sm: 2}})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({a: 1})

      expect(b).toEqual({paddingTop: '16px'})
    })
  })
})
