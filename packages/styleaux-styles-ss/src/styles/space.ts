import {
  style,
  styler,
  getStyle,
  createStyles,
  combineStyles,
} from '@styleaux/core'
import {px} from '../utils/px'
import {wrap2} from '../utils/wrap2'
import {MarginProperty, PaddingProperty} from '@styleaux/csstype'

export const defaultSpaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512]


export const margin = style<{margin: MarginProperty; m: MarginProperty}>({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const marginTop = style<{marginTop: MarginProperty; mt: MarginProperty}>(
  {
    prop: 'marginTop',
    alias: 'mt',
    key: 'space',
    transformValue: px,
    scale: defaultSpaceScale,
  },
)

export const marginBottom = style<{
  marginBottom: MarginProperty
  mb: MarginProperty
}>({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const marginY = createStyles({
  my: styler<MarginProperty>({
    getValue: getStyle({key: 'space', transformValue: px}),
    getStyle: wrap2('marginTop', 'marginBottom'),
  }),
})

export const marginX = createStyles({
  mx: styler<MarginProperty>({
    getValue: getStyle({key: 'space', transformValue: px}),
    getStyle: wrap2('marginLeft', 'marginRight'),
  }),
})

export const paddingY = createStyles({
  py: styler<PaddingProperty>({
    getValue: getStyle({key: 'space', transformValue: px}),
    getStyle: wrap2('paddingTop', 'paddingBottom'),
  }),
})

export const paddingX = createStyles({
  px: styler<PaddingProperty>({
    getValue: getStyle({key: 'space', transformValue: px}),
    getStyle: wrap2('paddingLeft', 'paddingRight'),
  }),
})

export const marginLeft = style<{
  marginLeft: PaddingProperty
  ml: PaddingProperty
}>({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const marginRight = style<{
  marginRight: PaddingProperty
  mr: PaddingProperty
}>({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const padding = style<{padding: PaddingProperty; p: PaddingProperty}>({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const paddingTop = style<{
  paddingTop: PaddingProperty
  pt: PaddingProperty
}>({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const paddingBottom = style<{
  paddingBottom: PaddingProperty
  pb: PaddingProperty
}>({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const paddingLeft = style<{
  paddingLeft: PaddingProperty
  pl: PaddingProperty
}>({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const paddingRight = style<{
  paddingRight: PaddingProperty
  px: PaddingProperty
}>({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  transformValue: px,
  scale: defaultSpaceScale,
})

export const space = combineStyles(
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
