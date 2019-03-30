import { BorderTopLeftRadiusProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOPLEFTRADIUS='borderTopLeftRadius'

export interface IBorderTopLeftRadiusProps<T> {
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius: T;
}

export const borderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOPLEFTRADIUS,
    prop: BORDERTOPLEFTRADIUS,
    alias,
    key,
    transformValue,
  })

export const borderTopLeftRadiusRule = <T = BorderTopLeftRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOPLEFTRADIUS, getValue: transformer})
