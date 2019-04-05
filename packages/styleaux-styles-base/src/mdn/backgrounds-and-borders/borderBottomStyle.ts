import { BorderBottomStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOMSTYLE='borderBottomStyle'

export interface IBorderBottomStyleProps<T> {
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle: T;
}

export const createBorderBottomStyle = <
  T = BorderBottomStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOMSTYLE,
    prop: BORDERBOTTOMSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderBottomStyleRule = <T = BorderBottomStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMSTYLE, getValue: transformer})

export const borderBottomStyle =createBorderBottomStyle()

export const borderBottomStyleRule =createBorderBottomStyleRule()
