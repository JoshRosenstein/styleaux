import { Config } from '../../types';
import { BorderBottomProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOM = 'borderBottom';

export interface BorderBottomProps<T = BorderBottomProperty> {
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  [BORDERBOTTOM]: T;
}

export const createBorderBottom = <
  T = BorderBottomProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBottomProps<T>, Theme> = {},
) =>
  style<BorderBottomProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOM,
    prop: BORDERBOTTOM,
    ...config,
  });

export const createBorderBottomRule = <T = BorderBottomProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOM, getValue: transformer });

export const borderBottom = createBorderBottom();

export const borderBottomRule = createBorderBottomRule();
