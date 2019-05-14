import { MaxHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MAXHEIGHT = 'maxHeight';

export interface MaxHeightProps<T = MaxHeightProperty> {
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **18** |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  [MAXHEIGHT]: T;
}

export const createMaxHeight = <
  T = MaxHeightProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MaxHeightProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MaxHeightProps<T>, Theme, Media>({
    cssProp: MAXHEIGHT,
    prop: MAXHEIGHT,
    key,
    transform,
  });

export const createMaxHeightRule = <T = MaxHeightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MAXHEIGHT, getValue: transformer });

export const maxHeight = createMaxHeight();

export const maxHeightRule = createMaxHeightRule();
