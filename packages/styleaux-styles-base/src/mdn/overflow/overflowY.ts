import { OverflowYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOWY = 'overflowY';

export interface OverflowYProps<T = OverflowYProperty> {
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  [OVERFLOWY]: T;
}

export const createOverflowY = <
  T = OverflowYProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OverflowYProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OverflowYProps<T>, Theme, Media>({
    cssProp: OVERFLOWY,
    prop: OVERFLOWY,
    key,
    transform,
  });

export const createOverflowYRule = <T = OverflowYProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOWY, getValue: transformer });

export const overflowY = createOverflowY();

export const overflowYRule = createOverflowYRule();
