import { TextEmphasisStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTEMPHASISSTYLE='textEmphasisStyle'

export interface ITextEmphasisStyleProps<T> {
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle: T;
}

export const textEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextEmphasisStyleProps<T>, Theme, Breakpoints>({
    cssProp: TEXTEMPHASISSTYLE,
    prop: TEXTEMPHASISSTYLE,
    alias,
    key,
    transformValue,
  })

export const textEmphasisStyleRule = <T = TextEmphasisStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTEMPHASISSTYLE, getValue: transformer})
