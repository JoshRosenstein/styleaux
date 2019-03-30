import { TextDecorationColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATIONCOLOR='textDecorationColor'

export interface ITextDecorationColorProps<T> {
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor: T;
}

export const textDecorationColor = <
  T = TextDecorationColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationColorProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATIONCOLOR,
    prop: TEXTDECORATIONCOLOR,
    alias,
    key,
    transformValue,
  })

export const textDecorationColorRule = <T = TextDecorationColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATIONCOLOR, getValue: transformer})