import { createColor } from '@styleaux/styles-base';
import { combineStyles, style } from '@styleaux/core';
import { BackgroundColorProperty } from '@styleaux/csstype';

export const textColor = createColor({ key: 'colors' });
export const backgroundColor = style<{
  bg?: BackgroundColorProperty;
  backgroundColor?: BackgroundColorProperty;
}>({
  cssProp: 'backgroundColor',
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
});

export const color = combineStyles(textColor, backgroundColor);
