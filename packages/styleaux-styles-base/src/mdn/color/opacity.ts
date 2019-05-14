import { OpacityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OPACITY = 'opacity';

export interface OpacityProps<T = OpacityProperty> {
  /**
   * The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  [OPACITY]: T;
}

export const createOpacity = <
  T = OpacityProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OpacityProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OpacityProps<T>, Theme, Media>({
    cssProp: OPACITY,
    prop: OPACITY,
    key,
    transform,
  });

export const createOpacityRule = <T = OpacityProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OPACITY, getValue: transformer });

export const opacity = createOpacity();

export const opacityRule = createOpacityRule();
