import {createResponsiveP} from '../'
import {createResponsive, IResponsivePOptions} from '../'
import {BackgroundImageProperty} from '@johanneslumpe/css-types'
import * as CSS from 'csstype'

const toMq = x => `@media ${x}`
type genP<V> = {
  paddingTop: V
}
describe('Default Breakpoints as Array', () => {
  const breakpoints = [1, 2, 4]
  const getBreakpoints = props =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsive = createResponsive(toMq, [1, 2, 4])
  const responsiveP = createResponsiveP<{}, typeof breakpoints>(
    responsive,
    getBreakpoints,
    ({value}) => p => value,
    {},
  )
  it('Works ', () => {
    const a = responsiveP<genP<any>, any>({
      prop: 'paddingTop',
      cssProp: 'paddingTop',
      defaultValue: '16px',
    })({paddingTop: '1'})
    expect(a).toEqual({paddingTop: '1'})
  })

  it('Works Array ', () => {
    const b = responsiveP<any, any>({
      prop: 'paddingTop',
      cssProp: 'paddingTop',
      defaultValue: '16px',
    })({paddingTop: [1, 2]})
    expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
  })

  it('Works Default Value ', () => {
    const b = responsiveP<any, any>({
      prop: 'paddingTop',
      cssProp: 'paddingTop',
      defaultValue: '16px',
      value: undefined,
    })({paddingTop: undefined})
    expect(b).toEqual({paddingTop: '16px'})
  })
})

describe('Default Breakpoints as Object', () => {
  const breakpoints = {sm: 1, md: 2, lg: 4}

  const theme = {breakpoints}
  const getBreakpoints = props =>
    (props && props.theme && props.theme['breakpoints']) || breakpoints
  const responsive = createResponsive(toMq, breakpoints)
  const responsiveP = createResponsiveP<typeof theme, typeof breakpoints>(
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
      const a = responsiveP<any>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: '1'})
      expect(a).toEqual({paddingTop: '1'})
    })

    it('Works Array ', () => {
      const b = responsiveP<any>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({paddingTop: [1, 2]})
      expect(b).toEqual({paddingTop: 1, '@media 1': {paddingTop: 2}})
    })

    it('Works Default Value ', () => {
      const b = responsiveP<any>({
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({})
      expect(b).toEqual({paddingTop: '16px'})
    })
  })

  describe('Values can be in Object Form', () => {
    it('Works ', () => {
      const a = responsiveP<any>({
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
      const b = responsiveP<any>({
        prop: 'paddingTop',
        cssProp: 'paddingTop',
        defaultValue: '16px',
      })({})

      expect(b).toEqual({paddingTop: '16px'})
    })

    interface Style extends CSS.Properties {}

    interface marginStyle {
      style: Style
    }
    it('Returns Style block if cssProp is false', () => {
      const b = responsiveP<marginStyle>({
        prop: 'style',
        cssProp: false,
      })({style: {default: {margin: '1'}, lg: {margin: '1'}}})

      expect(b).toEqual({
        [toMq(breakpoints.lg)]: {margin: '1'},
        margin: '1',
      })
    })
  })
})
