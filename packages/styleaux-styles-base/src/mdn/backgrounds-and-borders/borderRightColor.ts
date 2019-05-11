import { BorderRightColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERRIGHTCOLOR = 'borderRightColor';

export interface BorderRightColorProps<T = BorderRightColorProperty> {
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  [BORDERRIGHTCOLOR]: T;
}

export const createBorderRightColor = <
  T = BorderRightColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BorderRightColorProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BorderRightColorProps<T>, Theme, Media>({
    cssProp: BORDERRIGHTCOLOR,
    prop: BORDERRIGHTCOLOR,
    key,
    transformValue,
  });

export const createBorderRightColorRule = <
  T = BorderRightColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRIGHTCOLOR, getValue: transformer });

export const borderRightColor = createBorderRightColor();

export const borderRightColorRule = createBorderRightColorRule();
