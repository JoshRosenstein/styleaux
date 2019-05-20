import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBottomLeftRadiusProperty } from '@styleaux/csstype';

const BORDERBOTTOMLEFTRADIUS = 'borderBottomLeftRadius';

export interface BorderBottomLeftRadiusProps<
  T = BorderBottomLeftRadiusProperty
> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  [BORDERBOTTOMLEFTRADIUS]: T;
}

export const createBorderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBottomLeftRadiusProps<T>, Theme> = {},
) =>
  style<BorderBottomLeftRadiusProps<T>, Theme, Media>({
    cssProp: BORDERBOTTOMLEFTRADIUS,
    prop: BORDERBOTTOMLEFTRADIUS,
    ...config,
  });

export const createBorderBottomLeftRadiusRule = <
  T = BorderBottomLeftRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBOTTOMLEFTRADIUS, getValue: transformer });

export const borderBottomLeftRadius = createBorderBottomLeftRadius();

export const borderBottomLeftRadiusRule = createBorderBottomLeftRadiusRule();
