import { WordBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WORDBREAK='wordBreak'

export interface IWordBreakProps<T> {
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak: T;
}

export const createWordBreak = <
  T = WordBreakProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWordBreakProps<T>, Theme, Breakpoints>({
    cssProp: WORDBREAK,
    prop: WORDBREAK,
    alias,
    key,
    transformValue,
  })

export const createWordBreakRule = <T = WordBreakProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WORDBREAK, getValue: transformer})

export const wordBreak =createWordBreak()

export const wordBreakRule =createWordBreakRule()
