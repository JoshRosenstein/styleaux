import { TextJustifyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTJUSTIFY='textJustify'

export interface ITextJustifyProps<T> {
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify: T;
}

export const createTextJustify = <
  T = TextJustifyProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextJustifyProps<T>, Theme, Breakpoints>({
    cssProp: TEXTJUSTIFY,
    prop: TEXTJUSTIFY,
    alias,
    key,
    transformValue,
  })

export const createTextJustifyRule = <T = TextJustifyProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTJUSTIFY, getValue: transformer})

export const textJustify =createTextJustify()

export const textJustifyRule =createTextJustifyRule()
