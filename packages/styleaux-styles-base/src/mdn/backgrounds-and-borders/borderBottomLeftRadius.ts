import { BorderBottomLeftRadiusProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOMLEFTRADIUS='borderBottomLeftRadius'

export interface IBorderBottomLeftRadiusProps<T> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius: T;
}

export const borderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOMLEFTRADIUS,
    prop: BORDERBOTTOMLEFTRADIUS,
    alias,
    key,
    transformValue,
  })

export const borderBottomLeftRadiusRule = <T = BorderBottomLeftRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMLEFTRADIUS, getValue: transformer})
