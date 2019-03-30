import { BorderTopRightRadiusProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOPRIGHTRADIUS='borderTopRightRadius'

export interface IBorderTopRightRadiusProps<T> {
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius: T;
}

export const borderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOPRIGHTRADIUS,
    prop: BORDERTOPRIGHTRADIUS,
    alias,
    key,
    transformValue,
  })

export const borderTopRightRadiusRule = <T = BorderTopRightRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOPRIGHTRADIUS, getValue: transformer})