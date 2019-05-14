import { px } from '../utils/px';
import { WidthProperty } from '@styleaux/csstype';
import { widthValue } from '../values/width-value';
import { style, StyleOptions } from '@styleaux/core';
import {
  createMaxWidth,
  createMinWidth,
  createHeight,
  createMaxHeight,
  createMinHeight,
} from '@styleaux/styles-base';
export { display } from '@styleaux/styles-base';

export const width = style<{ w: WidthProperty }>({
  cssProp: 'width',
  prop: 'w',
  key: 'widths',
  transform: widthValue,
});

export const minWidth = createMinWidth({
  key: 'minWidths',
  transform: px,
});

export const maxWidth = createMaxWidth({
  key: 'maxWidth',
  transform: px,
});

export const height = createHeight({
  key: 'heights',
  transform: px,
});

export const maxHeight = createMaxHeight({
  key: 'maxHeights',
  transform: px,
});

export const minHeight = createMinHeight({
  key: 'minHeights',
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
