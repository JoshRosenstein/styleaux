import { OverflowXProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOWX = 'overflowX';

export interface OverflowXProps<T = OverflowXProperty> {
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  [OVERFLOWX]: T;
}

export const createOverflowX = <
  T = OverflowXProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OverflowXProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OverflowXProps<T>, Theme, Media>({
    cssProp: OVERFLOWX,
    prop: OVERFLOWX,
    key,
    transform,
  });

export const createOverflowXRule = <T = OverflowXProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOWX, getValue: transformer });

export const overflowX = createOverflowX();

export const overflowXRule = createOverflowXRule();
