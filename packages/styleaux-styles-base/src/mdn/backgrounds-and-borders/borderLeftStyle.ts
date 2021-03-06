import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderLeftStyleProperty } from '@styleaux/csstype';

const BORDERLEFTSTYLE = 'borderLeftStyle';

export interface BorderLeftStyleProps<T = BorderLeftStyleProperty> {
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  [BORDERLEFTSTYLE]: T;
}

export const createBorderLeftStyle = <
  T = BorderLeftStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderLeftStyleProps<T>, Theme> = {},
) =>
  style<BorderLeftStyleProps<T>, Theme, Media>({
    cssProp: BORDERLEFTSTYLE,
    prop: BORDERLEFTSTYLE,
    ...config,
  });

export const createBorderLeftStyleRule = <
  T = BorderLeftStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERLEFTSTYLE, getValue: transformer });

export const borderLeftStyle = createBorderLeftStyle();

export const borderLeftStyleRule = createBorderLeftStyleRule();
