import { BorderRadiusProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERRADIUS='borderRadius'

export interface IBorderRadiusProps<T> {
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius: T;
}

export const borderRadius = <
  T = BorderRadiusProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderRadiusProps<T>, Theme, Breakpoints>({
    cssProp: BORDERRADIUS,
    prop: BORDERRADIUS,
    alias,
    key,
    transformValue,
  })

export const borderRadiusRule = <T = BorderRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRADIUS, getValue: transformer})
