import {createResponsiveBool} from '../'
const toMq = x => `@media ${x}`

describe('Default Breakpoints as Array', () => {
  const responsive = createResponsiveBool(toMq, [1, 2, 4])
  it('Works ', () => {
    const a = responsive({
      cssProp: 'paddingTop',
      T: '1',
      value: true,
    })
    expect(a).toEqual({paddingTop: '1'})
  })

  it('Works Array ', () => {
    const b = responsive({
      cssProp: 'paddingTop',
      T: 1,
      F: 2,
      value: [true, false],
    })
    expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
  })

  it('Works Default Value ', () => {
    const b = responsive({
      cssProp: 'paddingTop',
      value: undefined,
      defaultValue: true,
      T: '16px',
    })
    expect(b).toEqual({paddingTop: '16px'})
  })
})

describe('Default Breakpoints as Object', () => {
  const responsive = createResponsiveBool(toMq, {sm: 1, md: 2, lg: 4})
  describe('Values can be in Array', () => {
    it('Works ', () => {
      const a = responsive({
        cssProp: 'paddingTop',
        T: '1',
        value: true,
      })
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        T: 1,
        F: 2,
        value: [true, false],
      })
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        T: '16px',
        defaultValue: true,
        value: undefined,
      })
      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsive({
        cssProp: 'paddingTop',
        T: '1',
        value: {default: true},
      })
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        T: 1,
        F: 2,
        value: {default: true, sm: false},
      })
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        T: '16px',
        defaultValue: {default: true},
        value: undefined,
      })
      expect(b).toEqual({paddingTop: '16px'})
    })
  })
})
