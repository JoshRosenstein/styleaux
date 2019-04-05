import {
  createBorder,
  createBorderWidth,
  createBorderStyle,
  createBorderColor,
  createBorderTop,
  createBorderRight,
  createBorderBottom,
  createBorderLeft,
  createBorderRadius,
} from '@styleaux/styles-base'
import {px} from '../utils/px'
import {combineStyles} from '@styleaux/core'

export const border = createBorder({key: 'borders'})

export const borderWidth = createBorderWidth({
  key: 'borderWidths',
  transformValue: px,
})

export const borderStyle = createBorderStyle({key: 'borderStyles'})

export const borderColor = createBorderColor({key: 'colors'})

export const borderTop = createBorderTop({key: 'borders'})

export const borderRight = createBorderRight({key: 'borders'})

export const borderBottom = createBorderBottom({key: 'borders'})

export const borderLeft = createBorderLeft({key: 'borders'})

export const borderRadius = createBorderRadius({
  key: 'radii',
  transformValue: px,
})

export const borders = combineStyles(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius
)
