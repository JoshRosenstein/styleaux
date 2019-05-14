import { BorderTopRightRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERTOPRIGHTRADIUS = 'borderTopRightRadius';

export interface BorderTopRightRadiusProps<T = BorderTopRightRadiusProperty> {
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  [BORDERTOPRIGHTRADIUS]: T;
}

export const createBorderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BorderTopRightRadiusProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BorderTopRightRadiusProps<T>, Theme, Media>({
    cssProp: BORDERTOPRIGHTRADIUS,
    prop: BORDERTOPRIGHTRADIUS,
    key,
    transform,
  });

export const createBorderTopRightRadiusRule = <
  T = BorderTopRightRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPRIGHTRADIUS, getValue: transformer });

export const borderTopRightRadius = createBorderTopRightRadius();

export const borderTopRightRadiusRule = createBorderTopRightRadiusRule();
