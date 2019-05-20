import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderTopStyleProperty } from '@styleaux/csstype';

const BORDERTOPSTYLE = 'borderTopStyle';

export interface BorderTopStyleProps<T = BorderTopStyleProperty> {
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  [BORDERTOPSTYLE]: T;
}

export const createBorderTopStyle = <
  T = BorderTopStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderTopStyleProps<T>, Theme> = {},
) =>
  style<BorderTopStyleProps<T>, Theme, Media>({
    cssProp: BORDERTOPSTYLE,
    prop: BORDERTOPSTYLE,
    ...config,
  });

export const createBorderTopStyleRule = <
  T = BorderTopStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPSTYLE, getValue: transformer });

export const borderTopStyle = createBorderTopStyle();

export const borderTopStyleRule = createBorderTopStyleRule();
