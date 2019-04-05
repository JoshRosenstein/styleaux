import { TextEmphasisProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTEMPHASIS='textEmphasis'

export interface ITextEmphasisProps<T> {
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis: T;
}

export const createTextEmphasis = <
  T = TextEmphasisProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextEmphasisProps<T>, Theme, Breakpoints>({
    cssProp: TEXTEMPHASIS,
    prop: TEXTEMPHASIS,
    alias,
    key,
    transformValue,
  })

export const createTextEmphasisRule = <T = TextEmphasisProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTEMPHASIS, getValue: transformer})

export const textEmphasis =createTextEmphasis()

export const textEmphasisRule =createTextEmphasisRule()
