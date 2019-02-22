import {percent} from './transformers'

export const widthConfig = {
  prop: 'width',
  postFn: percent,
  //themeKey: 'widths',
}

export const heightConfig = {
  prop: 'height',
  postFn: percent,
  // themeKey: 'heights',
}

export const maxWidthConfig = {
  prop: 'maxWidth',
  postFn: percent,
  //themeKey: 'widths',
}

export const maxHeightConfig = {
  prop: 'maxHeight',
  postFn: percent,
  //themeKey: 'heights',
}

export const minWidthConfig = {
  prop: 'minWidth',
  postFn: percent,
  //themeKey: 'widths',
}

export const minHeightConfig = {
  prop: 'minHeight',
  postFn: percent,
  //themeKey: 'heights',
}

export const dimensionsConfig = [
  widthConfig,
  heightConfig,
  maxWidthConfig,
  maxHeightConfig,
  minWidthConfig,
  minHeightConfig,
]
