import { px } from '../utils/px';
import { combineStyles } from '@styleaux/core';
import {
  COLOR_KEY,
  BORDER_KEY,
  BORDERWIDTHS_KEY,
  BORDER_STYLES_KEY,
  RADIUS_KEY,
} from '../constants';
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
} from '@styleaux/styles-base';

export const border = createBorder({ key: BORDER_KEY });

export const borderWidth = createBorderWidth({
  key: BORDERWIDTHS_KEY,
  transform: px,
});

export const borderStyle = createBorderStyle({ key: BORDER_STYLES_KEY });

export const borderColor = createBorderColor({ key: COLOR_KEY });

export const borderTop = createBorderTop({ key: BORDER_KEY });

export const borderRight = createBorderRight({ key: BORDER_KEY });

export const borderBottom = createBorderBottom({ key: BORDER_KEY });

export const borderLeft = createBorderLeft({ key: BORDER_KEY });

export const borderRadius = createBorderRadius({
  key: RADIUS_KEY,
  transform: px,
});

export const borders = combineStyles(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
);
