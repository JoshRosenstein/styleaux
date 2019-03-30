import { BorderRightStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERRIGHTSTYLE='borderRightStyle'

export interface IBorderRightStyleProps<T> {
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle: T;
}

export const borderRightStyle = <
  T = BorderRightStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderRightStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERRIGHTSTYLE,
    prop: BORDERRIGHTSTYLE,
    alias,
    key,
    transformValue,
  })

export const borderRightStyleRule = <T = BorderRightStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRIGHTSTYLE, getValue: transformer})
