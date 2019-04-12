import { FontVariantEastAsianProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTVARIANTEASTASIAN='fontVariantEastAsian'

export interface FontVariantEastAsianProps<T=FontVariantEastAsianProperty> {
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  [FONTVARIANTEASTASIAN]: T;
}

export const createFontVariantEastAsian = <
  T = FontVariantEastAsianProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontVariantEastAsianProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontVariantEastAsianProps<T>,Theme,Media>({
    cssProp:FONTVARIANTEASTASIAN,
    prop:FONTVARIANTEASTASIAN,
    key,
    transformValue,
  })

export const createFontVariantEastAsianRule = <T = FontVariantEastAsianProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FONTVARIANTEASTASIAN, getValue: transformer})

export const fontVariantEastAsian =createFontVariantEastAsian()

export const fontVariantEastAsianRule =createFontVariantEastAsianRule()
