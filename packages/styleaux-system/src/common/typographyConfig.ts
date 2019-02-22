import {px} from './transformers'

export const fontFamilyConfig = {
  prop: 'fontFamily',
  path: 'fonts',
}

export const fontSizeConfig = {
  prop: 'fontSize',
  path: 'fontSizes',
}

export const lineHeightConfig = {
  prop: 'lineHeight',
  path: 'lineHeights',
}

export const fontWeightConfig = {
  prop: 'fontWeight',
  path: 'fontWeights',
}

export const textAlignConfig = {
  prop: 'textAlign',
}

export const letterSpacingConfig = {
  prop: 'letterSpacing',
  path: 'letterSpacings',
  postFn: px,
}

export const colorConfig = {
  prop: 'color',
  path: 'colors',
}

export const textTransformConfig = {
  prop: 'textTransform',
}

export const typographyConfig = [
  fontFamilyConfig,
  fontSizeConfig,
  lineHeightConfig,
  fontWeightConfig,
  textAlignConfig,
  letterSpacingConfig,
  colorConfig,
  textTransformConfig,
]
