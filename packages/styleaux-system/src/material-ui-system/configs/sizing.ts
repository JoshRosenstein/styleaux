function postFn(value) {
  return value <= 1 ? `${value * 100}%` : value
}

export const widthConfig = {
  prop: 'width',
  postFn,
}

export const maxWidthConfig = {
  prop: 'maxWidth',
  postFn,
}

export const minWidthConfig = {
  prop: 'minWidth',
  postFn,
}

export const heightConfig = {
  prop: 'height',
  postFn,
}

export const maxHeightConfig = {
  prop: 'maxHeight',
  postFn,
}

export const minHeightConfig = {
  prop: 'minHeight',
  postFn,
}

export const sizeWidthConfig = {
  prop: 'size',
  cssProperty: 'width',
  postFn,
}

export const sizeHeightConfig = {
  prop: 'size',
  cssProperty: 'height',
  postFn,
}

export const sizingConfig = [
  widthConfig,
  maxWidthConfig,
  minWidthConfig,
  heightConfig,
  maxHeightConfig,
  minHeightConfig,
]
