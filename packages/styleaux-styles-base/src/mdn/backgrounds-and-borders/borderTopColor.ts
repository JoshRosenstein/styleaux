import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderTopColorProperty } from '@styleaux/csstype';

const BORDERTOPCOLOR = 'borderTopColor';

export interface BorderTopColorProps<T = BorderTopColorProperty> {
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  [BORDERTOPCOLOR]: T;
}

export const createBorderTopColor = <
  T = BorderTopColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderTopColorProps<T>, Theme> = {},
) =>
  style<BorderTopColorProps<T>, Theme, Media>({
    cssProp: BORDERTOPCOLOR,
    prop: BORDERTOPCOLOR,
    ...config,
  });

export const createBorderTopColorRule = <
  T = BorderTopColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPCOLOR, getValue: transformer });

export const borderTopColor = createBorderTopColor();

export const borderTopColorRule = createBorderTopColorRule();
