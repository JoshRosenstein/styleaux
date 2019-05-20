import { px } from '../utils/px';
import { getWidth } from '../values/width-value';
import { style, StyleOptions } from '@styleaux/core';
import {
  WIDTH_KEY,
  MAXHEIGHT_KEY,
  MINWIDTH_KEY,
  HEIGHT_KEY,
  MINHEIGHTS_KEY,
} from '../constants';
import {
  createMaxWidth,
  createMinWidth,
  createHeight,
  createMaxHeight,
  createMinHeight,
  createWidth,
} from '@styleaux/styles-base';
export const width = createWidth({
  key: WIDTH_KEY,
  transform: getWidth,
});

export const minWidth = createMinWidth({
  key: MINWIDTH_KEY,
  transform: px,
});

export const maxWidth = createMaxWidth({
  key: MAXHEIGHT_KEY,
  transform: px,
});

export const height = createHeight({
  key: HEIGHT_KEY,
  transform: px,
});

export const maxHeight = createMaxHeight({
  key: MAXHEIGHT_KEY,
  transform: px,
});

export const minHeight = createMinHeight({
  key: MINHEIGHTS_KEY,
  transform: px,
});

export type SizeProps<T = string | number> = {
  size?: T;
};
export const createSize = <T = string | number, Media = never, Theme = any>({
  transform = px,
}: Pick<StyleOptions<SizeProps<T>, Theme>, 'transform'> = {}) =>
  style<SizeProps<T>, Theme, Media>({
    cssProp: ['height', 'width'],
    prop: 'size',
    transform,
  });

export const size = createSize();
