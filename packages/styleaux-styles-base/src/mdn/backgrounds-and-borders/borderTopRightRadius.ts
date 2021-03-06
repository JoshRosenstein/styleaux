import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderTopRightRadiusProperty } from '@styleaux/csstype';

const BORDERTOPRIGHTRADIUS = 'borderTopRightRadius';

export interface BorderTopRightRadiusProps<T = BorderTopRightRadiusProperty> {
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  [BORDERTOPRIGHTRADIUS]: T;
}

export const createBorderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderTopRightRadiusProps<T>, Theme> = {},
) =>
  style<BorderTopRightRadiusProps<T>, Theme, Media>({
    cssProp: BORDERTOPRIGHTRADIUS,
    prop: BORDERTOPRIGHTRADIUS,
    ...config,
  });

export const createBorderTopRightRadiusRule = <
  T = BorderTopRightRadiusProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPRIGHTRADIUS, getValue: transformer });

export const borderTopRightRadius = createBorderTopRightRadius();

export const borderTopRightRadiusRule = createBorderTopRightRadiusRule();
