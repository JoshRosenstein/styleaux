import { BorderBottomColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMCOLOR = 'borderBottomColor';

export interface BorderBottomColorProps<T = BorderBottomColorProperty> {
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  [BORDERBOTTOMCOLOR]: T;
}

export const createBorderBottomColor = <
  T = BorderBottomColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderBottomColorProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderBottomColorProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMCOLOR,
    prop: BORDERBOTTOMCOLOR,
    key,
    transform,
  });

export const createBorderBottomColorRule = <
  T = BorderBottomColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMCOLOR, getValue: transformer });

export const borderBottomColor = createBorderBottomColor();

export const borderBottomColorRule = createBorderBottomColorRule();
