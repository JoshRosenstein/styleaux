import { ZIndexProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ZINDEX = 'zIndex';

export interface ZIndexProps<T = ZIndexProperty> {
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  [ZINDEX]: T;
}

export const createZIndex = <T = ZIndexProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ZIndexProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ZIndexProps<T>, Theme, Media>({
    cssProp: ZINDEX,
    prop: ZINDEX,
    key,
    transform,
  });

export const createZIndexRule = <T = ZIndexProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ZINDEX, getValue: transformer });

export const zIndex = createZIndex();

export const zIndexRule = createZIndexRule();
