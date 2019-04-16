import {
  style,
  combineStyles,
   WithTheme, StyleOptions,
} from '@styleaux/core'
import { px } from '../utils/px'
import { MarginProperty, PaddingProperty } from '@styleaux/csstype'

export const defaultSpaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512]

type PartialStyleOptions<P, T> = Partial<Pick<StyleOptions<P, T>, 'key' | 'transformValue' | 'scale'>>

export interface MarginProps<T = MarginProperty> {
  margin?: T
  m?: T
}

export const createMargin = <
  T = MarginProperty,
  Media = never,
  Theme = never,
  >({ key = 'space', transformValue = px , scale = defaultSpaceScale }: PartialStyleOptions<MarginProps<T>, Theme> =
    {}) =>
  style<MarginProps<T>, Theme, Media>({
    cssProp: 'margin',
    alias: 'm',
    prop: 'margin',
    key,
    transformValue,
    scale
  })

export const margin = createMargin()

export interface MarginTopProps<T = MarginProperty> {
  marginTop?: T
  mt?: T
}

export const createMarginTop = <
  T = MarginProperty,
  Media = never,
  Theme = never,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginTopProps<T>, Theme> =
    {}) =>
  style<MarginTopProps<T>, Theme, Media>({
    cssProp: 'marginTop',
    alias: 'mt',
    prop: 'marginTop',
    key,
    transformValue,
    scale
  })

export const marginTop = createMarginTop()

export interface MarginBottomProps<T = MarginProperty> {
  marginBottom?: T
  mb?: T
}
export const createMarginBottom = <
  T = MarginProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginBottomProps<T>, Theme> =
    {}) =>
  style<MarginBottomProps<T>, Theme, Media>({
    cssProp: 'marginBottom',
    alias: 'mb',
    prop: 'marginBottom',
    key,
    transformValue,
    scale
  })

export const marginBottom = createMarginBottom()

export interface MarginLeftProps<T = MarginProperty> {
  marginLeft?: T
  ml?: T
}


export const createMarginLeft = <
  T = MarginProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginLeftProps<T>, Theme> =
    {}) =>
  style<MarginLeftProps<T>, Theme, Media>({
    cssProp: 'marginLeft',
    alias: 'ml',
    prop: 'marginLeft',
    key,
    transformValue,
    scale
  })

export const marginLeft = createMarginLeft()

export interface MarginRightProps<T = MarginProperty> {
  marginRight?: T
  mr?: T
}

export const createMarginRight = <
  T = MarginProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginRightProps<T>, Theme> =
    {}) =>
  style<MarginRightProps<T>, Theme, Media>({
    cssProp: 'marginRight',
    alias: 'mr',
    prop: 'marginRight',
    key,
    transformValue,
    scale
  })

export const marginRight = createMarginRight()

export interface MarginYProps<T = MarginProperty> {
  my?: T
}


export const createMarginY = <
  T = MarginProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginYProps<T>, Theme> =
    {}) =>
  style<MarginYProps<T>, Theme, Media>({
    cssProp: ['marginTop', 'marginBottom'],
    prop: 'my',
    key,
    transformValue,
    scale
  })


export const marginY = createMarginY()

export interface MarginXProps<T = MarginProperty> {
  mx?: T
}

export const createMarginX = <
  T = MarginProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<MarginXProps<T>, Theme> =
    {}) =>
  style<MarginXProps<T>, Theme, Media>({
    cssProp: ['marginLeft', 'marginRight'],
    prop: 'mx',
    key,
    transformValue,
    scale
  })


export const marginX = createMarginX()

export interface PaddingProps<T = PaddingProperty> {
  padding?: T
  p?: T
}

export const createPadding = <
  T = PaddingProperty,
  Media = never,
  Theme = never,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingProps<T>, Theme> =
    {}) =>
  style<PaddingProps<T>, Theme, Media>({
    cssProp: 'padding',
    alias: 'p',
    prop: 'padding',
    key,
    transformValue,
    scale
  })

export const padding = createPadding()

export interface PaddingTopProps<T = PaddingProperty> {
  paddingTop?: T
  pt?: T
}

export const createPaddingTop = <
  T = PaddingProperty,
  Media = never,
  Theme = never,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingTopProps<T>, Theme> =
    {}) =>
  style<PaddingTopProps<T>, Theme, Media>({
    cssProp: 'paddingTop',
    alias: 'pt',
    prop: 'paddingTop',
    key,
    transformValue,
    scale
  })

export const paddingTop = createPaddingTop()

export interface PaddingBottomProps<T = PaddingProperty> {
  paddingBottom?: T
  pb?: T
}
export const createPaddingBottom = <
  T = PaddingProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingBottomProps<T>, Theme> =
    {}) =>
  style<PaddingBottomProps<T>, Theme, Media>({
    cssProp: 'paddingBottom',
    alias: 'pb',
    prop: 'paddingBottom',
    key,
    transformValue,
    scale
  })

export const paddingBottom = createPaddingBottom()

export interface PaddingLeftProps<T = PaddingProperty> {
  paddingLeft?: T
  pl?: T
}


export const createPaddingLeft = <
  T = PaddingProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingLeftProps<T>, Theme> =
    {}) =>
  style<PaddingLeftProps<T>, Theme, Media>({
    cssProp: 'paddingLeft',
    alias: 'pl',
    prop: 'paddingLeft',
    key,
    transformValue,
    scale
  })

export const paddingLeft = createPaddingLeft()

export interface PaddingRightProps<T = PaddingProperty> {
  paddingRight?: T
  pr?: T
}

export const createPaddingRight = <
  T = PaddingProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingRightProps<T>, Theme> =
    {}) =>
  style<PaddingRightProps<T>, Theme, Media>({
    cssProp: 'paddingRight',
    alias: 'pr',
    prop: 'paddingRight',
    key,
    transformValue,
    scale
  })

export const paddingRight = createPaddingRight()

export interface PaddingYProps<T = PaddingProperty> {
  py?: T
}


export const createPaddingY = <
  T = PaddingProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingYProps<T>, Theme> =
    {}) =>
  style<PaddingYProps<T>, Theme, Media>({
    cssProp: ['paddingTop', 'paddingBottom'],
    prop: 'py',
    key,
    transformValue,
    scale
  })


export const paddingY = createPaddingY()

export interface PaddingXProps<T = PaddingProperty> {
  px?: T
}

export const createPaddingX = <
  T = PaddingProperty,
  Media = never,
  Theme = any,
  >({ key = 'space', transformValue = px, scale = defaultSpaceScale }: PartialStyleOptions<PaddingXProps<T>, Theme> =
    {}) =>
  style<PaddingXProps<T>, Theme, Media>({
    cssProp: ['paddingLeft', 'paddingRight'],
    prop: 'px',
    key,
    transformValue,
    scale
  })
export const paddingX = createPaddingX()

export interface SpaceProps<T = PaddingProperty>
  extends
  MarginProps<T>,
  MarginXProps<T>,
  MarginYProps<T>,
  MarginTopProps<T>,
  MarginBottomProps<T>,
  MarginLeftProps<T>,
  MarginRightProps<T>,
  PaddingProps<T>,
  PaddingXProps<T>,
  PaddingYProps<T>,
  PaddingTopProps<T>,
  PaddingBottomProps<T>,
  PaddingLeftProps<T>,
  PaddingRightProps<T> { }

export const createSpace = <T = PaddingProperty, THEME = never, MEDIA = never>() => combineStyles<WithTheme<SpaceProps<T>, THEME, MEDIA>>(
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
)


export const space = createSpace()
