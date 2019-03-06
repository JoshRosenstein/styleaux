import {createResponsive} from '../'
const toMq = x => `@media ${x}`

// describe('Default Breakpoints as Array', () => {
//   const responsive = createResponsive(toMq, [1, 2, 4])
//   it('Works ', () => {
//     const a = responsive({
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//       value: '1',
//     })
//     expect(a).toEqual({paddingTop: '1'})
//   })

//   it('Works Array ', () => {
//     const b = responsive({
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//       value: [1, 2],
//     })
//     expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
//   })

//   it('Works Default Value ', () => {
//     const b = responsive({
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//       value: undefined,
//     })
//     expect(b).toEqual({paddingTop: '16px'})
//   })
// })
const BP = {sm: 1, md: 2, lg: 4}
describe('Default Breakpoints as Object', () => {
  const responsive = createResponsive<typeof BP>(toMq, {
    sm: 1,
    md: 2,
    lg: 4,
  })
  describe('Values can be in Array', () => {
    it('Works ', () => {
      const a = responsive({
        cssProp: 'paddingTop',
        defaultValue: '16px',
        value: '1',
      })
      expect(a).toEqual({paddingTop: '1'})
    })

    // it('Works Array ', () => {
    //   const b = responsive({
    //     cssProp: 'paddingTop',
    //     defaultValue: '16px',
    //     value: [1, 2],
    //   })
    //   expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    // })

    it('Works Default Value ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        defaultValue: '16px',
        value: undefined,
      })
      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsive({
        cssProp: 'paddingTop',
        defaultValue: '16px',
        value: {default: '1'},
      })
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        defaultValue: '16px',
        value: {default: 1, sm: 2},
      })
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsive({
        cssProp: 'paddingTop',
        defaultValue: '16px',
        value: {default: undefined},
      })
      expect(b).toEqual({paddingTop: '16px'})
    })
  })
})
