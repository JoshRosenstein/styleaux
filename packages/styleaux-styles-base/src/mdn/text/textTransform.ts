import { TextTransformProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTTRANSFORM='textTransform'

export interface ITextTransformProps<T> {
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform: T;
}

export const textTransform = <
  T = TextTransformProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextTransformProps<T>, Theme, Breakpoints>({
    cssProp: TEXTTRANSFORM,
    prop: TEXTTRANSFORM,
    alias,
    key,
    transformValue,
  })

export const textTransformRule = <T = TextTransformProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTTRANSFORM, getValue: transformer})
