import { TextEmphasisColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTEMPHASISCOLOR='textEmphasisColor'

export interface ITextEmphasisColorProps<T> {
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor: T;
}

export const createTextEmphasisColor = <
  T = TextEmphasisColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextEmphasisColorProps<T>, Theme, Breakpoints>({
    cssProp: TEXTEMPHASISCOLOR,
    prop: TEXTEMPHASISCOLOR,
    alias,
    key,
    transformValue,
  })

export const createTextEmphasisColorRule = <T = TextEmphasisColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTEMPHASISCOLOR, getValue: transformer})

export const textEmphasisColor =createTextEmphasisColor()

export const textEmphasisColorRule =createTextEmphasisColorRule()
