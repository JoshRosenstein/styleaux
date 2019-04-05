import { TextDecorationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATION='textDecoration'

export interface ITextDecorationProps<T> {
  /**
   * The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration: T;
}

export const createTextDecoration = <
  T = TextDecorationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATION,
    prop: TEXTDECORATION,
    alias,
    key,
    transformValue,
  })

export const createTextDecorationRule = <T = TextDecorationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATION, getValue: transformer})

export const textDecoration =createTextDecoration()

export const textDecorationRule =createTextDecorationRule()
