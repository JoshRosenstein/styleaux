import { Config } from '../../types';
import { BorderRadiusProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERRADIUS = 'borderRadius';

export interface BorderRadiusProps<T = BorderRadiusProperty> {
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  [BORDERRADIUS]: T;
}

export const createBorderRadius = <
  T = BorderRadiusProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderRadiusProps<T>, Theme> = {},
) =>
  style<BorderRadiusProps<T>, Theme, Media>({
    cssProp: BORDERRADIUS,
    prop: BORDERRADIUS,
    ...config,
  });

export const createBorderRadiusRule = <T = BorderRadiusProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRADIUS, getValue: transformer });

export const borderRadius = createBorderRadius();

export const borderRadiusRule = createBorderRadiusRule();
