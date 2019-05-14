import { MinHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MINHEIGHT = 'minHeight';

export interface MinHeightProps<T = MinHeightProperty> {
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  [MINHEIGHT]: T;
}

export const createMinHeight = <
  T = MinHeightProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MinHeightProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MinHeightProps<T>, Theme, Media>({
    cssProp: MINHEIGHT,
    prop: MINHEIGHT,
    key,
    transform,
  });

export const createMinHeightRule = <T = MinHeightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MINHEIGHT, getValue: transformer });

export const minHeight = createMinHeight();

export const minHeightRule = createMinHeightRule();
