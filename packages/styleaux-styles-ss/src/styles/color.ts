import { COLOR_KEY } from '../constants';
import { createColor } from '@styleaux/styles-base';
import { combineStyles, style } from '@styleaux/core';
import { BackgroundColorProperty } from '@styleaux/csstype';
const BACKGROUNDCOLOR = 'backgroundColor';
export const textColor = createColor({ key: 'colors' });
export const backgroundColor = style<{
  bg?: BackgroundColorProperty;
  backgroundColor?: BackgroundColorProperty;
}>({
  cssProp: BACKGROUNDCOLOR,
  prop: [BACKGROUNDCOLOR, 'bg'],
  key: COLOR_KEY,
});

export const color = combineStyles(textColor, backgroundColor);
