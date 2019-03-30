import { BorderBottomRightRadiusProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOMRIGHTRADIUS='borderBottomRightRadius'

export interface IBorderBottomRightRadiusProps<T> {
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius: T;
}

export const borderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOMRIGHTRADIUS,
    prop: BORDERBOTTOMRIGHTRADIUS,
    alias,
    key,
    transformValue,
  })

export const borderBottomRightRadiusRule = <T = BorderBottomRightRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMRIGHTRADIUS, getValue: transformer})
