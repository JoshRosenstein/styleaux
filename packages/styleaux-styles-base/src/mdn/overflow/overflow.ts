import { OverflowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OVERFLOW = 'overflow';

export interface OverflowProps<T = OverflowProperty> {
  /**
   * The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  [OVERFLOW]: T;
}

export const createOverflow = <
  T = OverflowProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OverflowProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OverflowProps<T>, Theme, Media>({
    cssProp: OVERFLOW,
    prop: OVERFLOW,
    key,
    transform,
  });

export const createOverflowRule = <T = OverflowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OVERFLOW, getValue: transformer });

export const overflow = createOverflow();

export const overflowRule = createOverflowRule();
