import { TextIndentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTINDENT='textIndent'

export interface ITextIndentProps<T> {
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent: T;
}

export const createTextIndent = <
  T = TextIndentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextIndentProps<T>, Theme, Breakpoints>({
    cssProp: TEXTINDENT,
    prop: TEXTINDENT,
    alias,
    key,
    transformValue,
  })

export const createTextIndentRule = <T = TextIndentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTINDENT, getValue: transformer})

export const textIndent =createTextIndent()

export const textIndentRule =createTextIndentRule()
