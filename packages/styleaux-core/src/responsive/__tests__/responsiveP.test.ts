import {createResponsiveP} from '../'
import {createResponsive} from '../'

// import {WithTheme, IStyles, IResponsivePOptions} from '../types'
//import {BackgroundImageProperty} from '@johanneslumpe/css-types'
//import * as CSS from 'csstype'

const toMq = x => `@media ${x}`
type genP<V> = {
  paddingTop: V
}

interface IBreakpoints {
  small: string
  medium: string
  large: string
}
interface IColors {
  red: string
  blue: string
  green: string
}
interface IMyTheme {
  colors: IColors
  breakpoints: IBreakpoints
}

// const myTheme: IMyTheme = {
//   colors: {
//     red: '#f00',
//     green: '#0f0',
//     blue: '#00f',
//   },
//   breakpoints: {
//     small: '@media (min-width: 30em)',
//     medium: '@media (min-width: 40em)',
//     large: '@media (min-width: 50em)',
//   },
// }

// describe('Default Breakpoints as Array', () => {
//   const breakpoints = [1, 2, 4]
//   const getBreakpoints = props =>
//     (props && props.theme && props.theme['breakpoints']) || breakpoints
//   const responsive = createResponsive(toMq, [1, 2, 4])
//   const responsiveP = createResponsiveP<{}, typeof breakpoints>(
//     responsive,
//     getBreakpoints,
//     ({value}) => p => value,
//     {},
//   )
//   it('Works ', () => {
//     const a = responsiveP<genP<any>, any>({
//       prop: 'paddingTop',
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//     })({paddingTop: '1'})
//     expect(a).toEqual({paddingTop: '1'})
//   })

//   it('Works Array ', () => {
//     const b = responsiveP<any, any>({
//       prop: 'paddingTop',
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//     })({paddingTop: [1, 2]})
//     expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
//   })

//   it('Works Default Value ', () => {
//     const b = responsiveP<any, any>({
//       prop: 'paddingTop',
//       cssProp: 'paddingTop',
//       defaultValue: '16px',
//       value: undefined,
//     })({paddingTop: undefined})
//     expect(b).toEqual({paddingTop: '16px'})
//   })
// })

describe('Default Breakpoints as Object', () => {
  const breakpoints = {sm: 1, md: 2, lg: 4}

  // interface MYResponsivePropP<P> extends ResponsivePropP<P,IMyTheme,IBreakpoints>{}

  //const theme = {breakpoints}
  const getBreakpoints = props =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsive = createResponsive(toMq, breakpoints)

  // const responsiveP: <P>(
  //   {
  //     defaultValue,
  //     value,
  //     cssProp,
  //     prop,
  //     transform,
  //     ...localoptions
  //   }: IResponsivePOptions<P, IMyTheme, IBreakpoints>, // IResponsivePOptions<P, T, DT> & TransformPOptions, //IDictionary, //IResponsivePOptions<P, T, DT>,
  // ) => (
  //   props: WithTheme<P, IMyTheme, IBreakpoints>,
  // ) => IStyles | undefined = createResponsiveP(
  //   responsive,
  //   getBreakpoints,
  //   ({value}) => p => value,
  //   {},
  // )

  const responsiveP = createResponsiveP<IMyTheme, IBreakpoints>(
    responsive,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )

  // export interface IBackgroundImageProps<T> {
  //   /**
  //    * The **`background-image`** CSS property sets one or more background images on an element.
  //    *
  //    * @see https://developer.mozilla.org/docs/Web/CSS/background-image
  //    */
  //   backgroundImage: T
  // }

  // const backgroundImage = <
  //   T = BackgroundImageProperty,
  //   Theme = typeof theme,
  //   Breakpoints = typeof breakpoints
  // >({
  //   path,
  // }: Partial<IResponsivePOptions<IBackgroundImageProps<T>, Theme>> = {}) =>
  //   responsiveP<IBackgroundImageProps<T>, Theme, Breakpoints>({
  //     cssProp: 'backgroundImage',
  //     prop: 'backgroundImage',
  //     path,
  //   })

  // const t = backgroundImage({path: 'a'})({backgroundImage: {sm: '1'}})
  describe('Values can be in Array', () => {
    it('Works ', () => {
      const a = responsiveP<{paddingTop: string}>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: '1'})
      expect(a).toEqual({paddingTop: '1'})
    })

    // it('Works Array ', () => {
    //   const b = responsiveP<{paddingTop: number}>({
    //     prop: 'paddingTop',
    //     cssProp: 'paddingTop',
    //     defaultValue: '16px',
    //   })({paddingTop: [1, 2]})
    //   expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    // })

    it('Works Default Value ', () => {
      const b = responsiveP<genP<'string'>>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({})

      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsiveP<{paddingTop: string}>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: {default: '1'}})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP<any>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: {default: 1, sm: 2}})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({})

      expect(b).toEqual({paddingTop: '16px'})
    })

    it('Type Extracts Theme Keys ', () => {
      const b = responsiveP({
        prop: 'color',
        cssProp: 'color',
        path: 'colors',
        defaultValue: 'blue',
      })({color: 'blue'})

      expect(b).toEqual({color: 'blue'})
    })

    // interface Style extends CSS.Properties {}

    // interface marginStyle {
    //   style: Style
    // }
    // it('Returns Style block if cssProp is false', () => {
    //   const b = responsiveP<marginStyle>({
    //     prop: 'style',
    //     cssProp: false,
    //   })({style: {default: {margin: '1'}, lg: {margin: '1'}}})

    //   expect(b).toEqual({
    //     [toMq(breakpoints.lg)]: {margin: '1'},
    //     margin: '1',
    //   })
    // })
  })
})
