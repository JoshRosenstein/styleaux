import { BorderBottomLeftRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMLEFTRADIUS = 'borderBottomLeftRadius';

export interface BorderBottomLeftRadiusProps<
  T = BorderBottomLeftRadiusProperty
> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  [BORDERBOTTOMLEFTRADIUS]: T;
}

export const createBorderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BorderBottomLeftRadiusProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BorderBottomLeftRadiusProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMLEFTRADIUS,
    prop: BORDERBOTTOMLEFTRADIUS,
    key,
    transform,
  });

export const createBorderBottomLeftRadiusRule = <
  T = BorderBottomLeftRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMLEFTRADIUS, getValue: transformer });

export const borderBottomLeftRadius = createBorderBottomLeftRadius();

export const borderBottomLeftRadiusRule = createBorderBottomLeftRadiusRule();
