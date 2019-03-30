import { TextJustifyProperty } from '@roseys/csstype';

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

export const textJustify = <
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

export const textJustifyRule = <T = TextJustifyProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTJUSTIFY, getValue: transformer})
