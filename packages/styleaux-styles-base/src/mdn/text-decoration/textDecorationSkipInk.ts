import { TextDecorationSkipInkProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATIONSKIPINK='textDecorationSkipInk'

export interface ITextDecorationSkipInkProps<T> {
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk: T;
}

export const textDecorationSkipInk = <
  T = TextDecorationSkipInkProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationSkipInkProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATIONSKIPINK,
    prop: TEXTDECORATIONSKIPINK,
    alias,
    key,
    transformValue,
  })

export const textDecorationSkipInkRule = <T = TextDecorationSkipInkProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATIONSKIPINK, getValue: transformer})