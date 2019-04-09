import {ColorProperty} from '@styleaux/csstype'
import {assertTrue, Equals} from 'typescript-test-utils'
import {
  style,
  StyleOptions2,
  styler,
  Getter,
  Arg1,
  DeepSimplify,
  ResponsiveObject,
  Media,
  NeversToString,
} from '../'
import {DeepRequired} from '../types'

const COLOR = 'color'

export interface IColorProps<T> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  [COLOR]: T
}

export const createColor = <
  Props extends Record<string, any> = IColorProps<ColorProperty>
>({
  key,
  transformValue,
  alias,
  cssProp = COLOR as any,
  prop = COLOR as any,
}: Partial<StyleOptions2<Props, any>> = {}) =>
  style<Props, any>({
    cssProp,
    prop,
    alias,
    key,
    transformValue,
  })

export const createColorRule = <T = ColorProperty>(transformer?: Getter) =>
  styler<T>({cssProp: COLOR, getValue: transformer})

export const color = createColor()

export const colorRule = createColorRule()

it('no theme or media', () => {
  type Style = typeof color

  type StylePropType = DeepSimplify<Arg1<Style>>
  type ExpectedPropType = {
    color: ColorProperty
  }

  assertTrue<Equals<StylePropType, ExpectedPropType>>()
})

it('withMedia', () => {
  //type Media={sm:string,md:string}

  type BaseStyleProps = {color: 'ColorProperty'}

  const style = createColor<
    ResponsiveObject<BaseStyleProps, NeversToString<Media>>
  >()

  type Style = typeof style

  type StylePropType = DeepRequired<Arg1<Style>>
  type ExpectedPropType = DeepRequired<{
    color:
      | 'ColorProperty'
      | 'ColorProperty'[]
      | {
          sm: 'ColorProperty'
          md: 'ColorProperty'
          lg: 'ColorProperty'
          all: 'ColorProperty'
        }
  }>

  assertTrue<Equals<StylePropType, ExpectedPropType>>()
})
