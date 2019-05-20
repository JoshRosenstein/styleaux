import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBottomStyleProperty } from '@styleaux/csstype';

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
>(
  config: Config<BorderBottomStyleProps<T>, Theme> = {},
) =>
  style<BorderBottomStyleProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMSTYLE,
    prop: BORDERBOTTOMSTYLE,
    ...config,
  });

export const createBorderBottomStyleRule = <
  T = BorderBottomStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMSTYLE, getValue: transformer });

export const borderBottomStyle = createBorderBottomStyle();

export const borderBottomStyleRule = createBorderBottomStyleRule();
