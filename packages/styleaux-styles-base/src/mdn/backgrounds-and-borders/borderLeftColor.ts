import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderLeftColorProperty } from '@styleaux/csstype';

const BORDERLEFTCOLOR = 'borderLeftColor';

export interface BorderLeftColorProps<T = BorderLeftColorProperty> {
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  [BORDERLEFTCOLOR]: T;
}

export const createBorderLeftColor = <
  T = BorderLeftColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderLeftColorProps<T>, Theme> = {},
) =>
  style<BorderLeftColorProps<T>, Theme, Media>({
    cssProp: BORDERLEFTCOLOR,
    prop: BORDERLEFTCOLOR,
    ...config,
  });

export const createBorderLeftColorRule = <
  T = BorderLeftColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERLEFTCOLOR, getValue: transformer });

export const borderLeftColor = createBorderLeftColor();

export const borderLeftColorRule = createBorderLeftColorRule();
