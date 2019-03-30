import { FontProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONT='font'

export interface IFontProps<T> {
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font: T;
}

export const font = <
  T = FontProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontProps<T>, Theme, Breakpoints>({
    cssProp: FONT,
    prop: FONT,
    alias,
    key,
    transformValue,
  })

export const fontRule = <T = FontProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONT, getValue: transformer})
