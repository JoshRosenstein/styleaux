import { BorderTopLeftRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERTOPLEFTRADIUS = 'borderTopLeftRadius';

export interface BorderTopLeftRadiusProps<T = BorderTopLeftRadiusProperty> {
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  [BORDERTOPLEFTRADIUS]: T;
}

export const createBorderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BorderTopLeftRadiusProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BorderTopLeftRadiusProps<T>, Theme, Media>({
    cssProp: BORDERTOPLEFTRADIUS,
    prop: BORDERTOPLEFTRADIUS,
    key,
    transform,
  });

export const createBorderTopLeftRadiusRule = <
  T = BorderTopLeftRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPLEFTRADIUS, getValue: transformer });

export const borderTopLeftRadius = createBorderTopLeftRadius();

export const borderTopLeftRadiusRule = createBorderTopLeftRadiusRule();
