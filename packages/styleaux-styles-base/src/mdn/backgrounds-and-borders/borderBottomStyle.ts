import { BorderBottomStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMSTYLE = 'borderBottomStyle';

export interface BorderBottomStyleProps<T = BorderBottomStyleProperty> {
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  [BORDERBOTTOMSTYLE]: T;
}

export const createBorderBottomStyle = <
  T = BorderBottomStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderBottomStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderBottomStyleProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMSTYLE,
    prop: BORDERBOTTOMSTYLE,
    key,
    transform,
  });

export const createBorderBottomStyleRule = <
  T = BorderBottomStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMSTYLE, getValue: transformer });

export const borderBottomStyle = createBorderBottomStyle();

export const borderBottomStyleRule = createBorderBottomStyleRule();
