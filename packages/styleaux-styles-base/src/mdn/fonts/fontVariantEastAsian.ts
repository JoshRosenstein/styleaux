import { FontVariantEastAsianProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTVARIANTEASTASIAN='fontVariantEastAsian'

export interface IFontVariantEastAsianProps<T> {
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian: T;
}

export const fontVariantEastAsian = <
  T = FontVariantEastAsianProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontVariantEastAsianProps<T>, Theme, Breakpoints>({
    cssProp: FONTVARIANTEASTASIAN,
    prop: FONTVARIANTEASTASIAN,
    alias,
    key,
    transformValue,
  })

export const fontVariantEastAsianRule = <T = FontVariantEastAsianProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTEASTASIAN, getValue: transformer})