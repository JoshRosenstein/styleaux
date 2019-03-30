import { TextDecorationLineProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATIONLINE='textDecorationLine'

export interface ITextDecorationLineProps<T> {
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine: T;
}

export const textDecorationLine = <
  T = TextDecorationLineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationLineProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATIONLINE,
    prop: TEXTDECORATIONLINE,
    alias,
    key,
    transformValue,
  })

export const textDecorationLineRule = <T = TextDecorationLineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATIONLINE, getValue: transformer})
