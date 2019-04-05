import { BorderBottomLeftRadiusProperty } from '@styleaux/csstype';

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

export const createBorderBottomLeftRadius = <
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

export const createBorderBottomLeftRadiusRule = <T = BorderBottomLeftRadiusProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMLEFTRADIUS, getValue: transformer})

export const borderBottomLeftRadius =createBorderBottomLeftRadius()

export const borderBottomLeftRadiusRule =createBorderBottomLeftRadiusRule()
