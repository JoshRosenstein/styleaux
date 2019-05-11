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
  transformValue: widthValue,
});

export const minWidth = createMinWidth({
  key: 'minWidths',
  transformValue: px,
});

export const maxWidth = createMaxWidth({
  key: 'maxWidth',
  transformValue: px,
});

export const height = createHeight({
  key: 'heights',
  transformValue: px,
});

export const maxHeight = createMaxHeight({
  key: 'maxHeights',
  transformValue: px,
});

export const minHeight = createMinHeight({
  key: 'minHeights',
  transformValue: px,
});

export type SizeProps<T = string | number> = {
  size?: T;
};
export const createSize = <T = string | number, Media = never, Theme = any>({
  transformValue = px,
}: Pick<StyleOptions<SizeProps<T>, Theme>, 'transformValue'> = {}) =>
  style<SizeProps<T>, Theme, Media>({
    cssProp: ['height', 'width'],
    prop: 'size',
    transformValue,
  });

export const size = createSize();
