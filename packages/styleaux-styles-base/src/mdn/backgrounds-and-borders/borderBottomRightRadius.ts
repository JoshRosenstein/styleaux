import { BorderBottomRightRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMRIGHTRADIUS = 'borderBottomRightRadius';

export interface BorderBottomRightRadiusProps<
  T = BorderBottomRightRadiusProperty
> {
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  [BORDERBOTTOMRIGHTRADIUS]: T;
}

export const createBorderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BorderBottomRightRadiusProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BorderBottomRightRadiusProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMRIGHTRADIUS,
    prop: BORDERBOTTOMRIGHTRADIUS,
    key,
    transform,
  });

export const createBorderBottomRightRadiusRule = <
  T = BorderBottomRightRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMRIGHTRADIUS, getValue: transformer });

export const borderBottomRightRadius = createBorderBottomRightRadius();

export const borderBottomRightRadiusRule = createBorderBottomRightRadiusRule();
