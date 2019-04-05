import { TextDecorationStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATIONSTYLE='textDecorationStyle'

export interface ITextDecorationStyleProps<T> {
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle: T;
}

export const createTextDecorationStyle = <
  T = TextDecorationStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationStyleProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATIONSTYLE,
    prop: TEXTDECORATIONSTYLE,
    alias,
    key,
    transformValue,
  })

export const createTextDecorationStyleRule = <T = TextDecorationStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATIONSTYLE, getValue: transformer})

export const textDecorationStyle =createTextDecorationStyle()

export const textDecorationStyleRule =createTextDecorationStyleRule()
