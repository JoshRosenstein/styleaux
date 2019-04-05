import { BorderLeftStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERLEFTSTYLE='borderLeftStyle'

export interface IBorderLeftStyleProps<T> {
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle: T;
}

export const createBorderLeftStyle = <
  T = BorderLeftStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderLeftStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERLEFTSTYLE,
    prop: BORDERLEFTSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderLeftStyleRule = <T = BorderLeftStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERLEFTSTYLE, getValue: transformer})

export const borderLeftStyle =createBorderLeftStyle()

export const borderLeftStyleRule =createBorderLeftStyleRule()
