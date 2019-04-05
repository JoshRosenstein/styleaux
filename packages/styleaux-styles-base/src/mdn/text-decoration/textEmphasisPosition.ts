import { TextEmphasisPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTEMPHASISPOSITION='textEmphasisPosition'

export interface ITextEmphasisPositionProps<T> {
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition: T;
}

export const createTextEmphasisPosition = <
  T = TextEmphasisPositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextEmphasisPositionProps<T>, Theme, Breakpoints>({
    cssProp: TEXTEMPHASISPOSITION,
    prop: TEXTEMPHASISPOSITION,
    alias,
    key,
    transformValue,
  })

export const createTextEmphasisPositionRule = <T = TextEmphasisPositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTEMPHASISPOSITION, getValue: transformer})

export const textEmphasisPosition =createTextEmphasisPosition()

export const textEmphasisPositionRule =createTextEmphasisPositionRule()
