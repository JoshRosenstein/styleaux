import { Config } from '../../types';
import { BorderStyleProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERSTYLE = 'borderStyle';

export interface BorderStyleProps<T = BorderStyleProperty> {
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  [BORDERSTYLE]: T;
}

export const createBorderStyle = <
  T = BorderStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderStyleProps<T>, Theme> = {},
) =>
  style<BorderStyleProps<T>, Theme, Media>({
    cssProp: BORDERSTYLE,
    prop: BORDERSTYLE,
    ...config,
  });

export const createBorderStyleRule = <T = BorderStyleProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERSTYLE, getValue: transformer });

export const borderStyle = createBorderStyle();

export const borderStyleRule = createBorderStyleRule();
