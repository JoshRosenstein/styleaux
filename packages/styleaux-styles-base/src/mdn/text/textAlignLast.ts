import { TextAlignLastProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTALIGNLAST='textAlignLast'

export interface ITextAlignLastProps<T> {
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast: T;
}

export const createTextAlignLast = <
  T = TextAlignLastProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextAlignLastProps<T>, Theme, Breakpoints>({
    cssProp: TEXTALIGNLAST,
    prop: TEXTALIGNLAST,
    alias,
    key,
    transformValue,
  })

export const createTextAlignLastRule = <T = TextAlignLastProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTALIGNLAST, getValue: transformer})

export const textAlignLast =createTextAlignLast()

export const textAlignLastRule =createTextAlignLastRule()
