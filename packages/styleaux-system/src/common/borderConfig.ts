import {px, getBorder} from './transformers'

export const borderConfig = {
  prop: 'border',
  path: 'borders',
  postFn: getBorder,
}

export const borderTopConfig = {
  prop: 'borderTop',
  path: 'borders',
  postFn: getBorder,
}

export const borderRightConfig = {
  prop: 'borderRight',
  path: 'borders',
  postFn: getBorder,
}

export const borderBottomConfig = {
  prop: 'borderBottom',
  path: 'borders',
  postFn: getBorder,
}

export const borderLeftConfig = {
  prop: 'borderLeft',
  path: 'borders',
  postFn: getBorder,
}

export const borderColorConfig = {
  prop: 'borderColor',
  path: 'colors',
}

export const borderRadiusConfig = {
  prop: 'borderRadius',
  path: 'radii',
  postFn: px,
}

export const boxShadowConfig = {
  prop: 'boxShadow',
  path: 'shadows',
}

export const bordersConfig = [
  borderConfig,
  borderTopConfig,
  borderRightConfig,
  borderBottomConfig,
  borderLeftConfig,
  borderColorConfig,
  borderRadiusConfig,
  boxShadowConfig,
]
