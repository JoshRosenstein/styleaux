import { TextAlignLastProperty } from '@roseys/csstype';

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

export const textAlignLast = <
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

export const textAlignLastRule = <T = TextAlignLastProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTALIGNLAST, getValue: transformer})
