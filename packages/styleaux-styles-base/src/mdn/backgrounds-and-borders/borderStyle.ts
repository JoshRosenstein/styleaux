import { BorderStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERSTYLE='borderStyle'

export interface IBorderStyleProps<T> {
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle: T;
}

export const borderStyle = <
  T = BorderStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERSTYLE,
    prop: BORDERSTYLE,
    alias,
    key,
    transformValue,
  })

export const borderStyleRule = <T = BorderStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERSTYLE, getValue: transformer})
