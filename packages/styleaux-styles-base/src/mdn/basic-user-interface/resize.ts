import { ResizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const RESIZE = 'resize';

export interface ResizeProps<T = ResizeProperty> {
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |         | **3**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  [RESIZE]: T;
}

export const createResize = <T = ResizeProperty, Media = never, Theme = never>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<ResizeProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<ResizeProps<T>, Theme, Media>({
    cssProp: RESIZE,
    prop: RESIZE,
    key,
    transformValue,
  });

export const createResizeRule = <T = ResizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: RESIZE, getValue: transformer });

export const resize = createResize();

export const resizeRule = createResizeRule();
