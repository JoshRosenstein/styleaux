function postFn(value) {
  return value <= 1 ? `${value * 100}%` : value
}

export const width = {
  prop: 'width',
  postFn,
}

export const maxWidth = {
  prop: 'maxWidth',
  postFn,
}

export const minWidth = {
  prop: 'minWidth',
  postFn,
}

export const height = {
  prop: 'height',
  postFn,
}

export const maxHeight = {
  prop: 'maxHeight',
  postFn,
}

export const minHeight = {
  prop: 'minHeight',
  postFn,
}

export const sizeWidth = {
  prop: 'size',
  cssProperty: 'width',
  postFn,
}

export const sizeHeight = {
  prop: 'size',
  cssProperty: 'height',
  postFn,
}

const sizing = [width, maxWidth, minWidth, height, maxHeight, minHeight]

export default sizing
