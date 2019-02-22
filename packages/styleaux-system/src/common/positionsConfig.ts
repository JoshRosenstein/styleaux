import {px} from './transformers'

export const positionConfig = {
  prop: 'position',
}

export const zIndexConfig = {
  prop: 'zIndex',
  path: 'zIndexes',
}

export const topConfig = {
  prop: 'top',
  postFn: px,
}

export const rightConfig = {
  prop: 'right',
  postFn: px,
}

export const bottomConfig = {
  prop: 'bottom',
  postFn: px,
}

export const leftConfig = {
  prop: 'left',
  postFn: px,
}

export const positionsConfig = [
  positionConfig,
  zIndexConfig,
  topConfig,
  rightConfig,
  bottomConfig,
  leftConfig,
]
