import { BorderRightStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERRIGHTSTYLE = 'borderRightStyle';

export interface BorderRightStyleProps<T = BorderRightStyleProperty> {
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  [BORDERRIGHTSTYLE]: T;
}

export const createBorderRightStyle = <
  T = BorderRightStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderRightStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderRightStyleProps<T>, Theme, Media>({
    cssProp: BORDERRIGHTSTYLE,
    prop: BORDERRIGHTSTYLE,
    key,
    transform,
  });

export const createBorderRightStyleRule = <
  T = BorderRightStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRIGHTSTYLE, getValue: transformer });

export const borderRightStyle = createBorderRightStyle();

export const borderRightStyleRule = createBorderRightStyleRule();
