import { px } from '../utils/px';
import {
  createFontFamily,
  createFontWeight,
  createLineHeight,
  createLetterSpacing,
  createFontSize,
} from '@styleaux/styles-base';

export { textAlign, fontStyle } from '@styleaux/styles-base';

export const fontSize = createFontSize({
  key: 'fontSizes',
  transform: px,
});

export const fontFamily = createFontFamily({
  key: 'fonts',
});

export const fontWeight = createFontWeight({
  key: 'fontWeights',
});

export const lineHeight = createLineHeight({
  key: 'lineHeight',
});

export const letterSpacing = createLetterSpacing({
  key: 'letterSpacings',
  transform: px,
});
