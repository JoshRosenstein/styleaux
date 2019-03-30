import { WordSpacingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WORDSPACING='wordSpacing'

export interface IWordSpacingProps<T> {
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing: T;
}

export const wordSpacing = <
  T = WordSpacingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWordSpacingProps<T>, Theme, Breakpoints>({
    cssProp: WORDSPACING,
    prop: WORDSPACING,
    alias,
    key,
    transformValue,
  })

export const wordSpacingRule = <T = WordSpacingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WORDSPACING, getValue: transformer})
