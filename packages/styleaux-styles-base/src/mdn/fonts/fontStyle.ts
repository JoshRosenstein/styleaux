import { FontStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTSTYLE='fontStyle'

export interface IFontStyleProps<T> {
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle: T;
}

export const createFontStyle = <
  T = FontStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontStyleProps<T>, Theme, Breakpoints>({
    cssProp: FONTSTYLE,
    prop: FONTSTYLE,
    alias,
    key,
    transformValue,
  })

export const createFontStyleRule = <T = FontStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTSTYLE, getValue: transformer})

export const fontStyle =createFontStyle()

export const fontStyleRule =createFontStyleRule()
