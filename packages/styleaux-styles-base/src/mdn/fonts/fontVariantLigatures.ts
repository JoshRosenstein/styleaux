import { FontVariantLigaturesProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONTVARIANTLIGATURES='fontVariantLigatures'

export interface FontVariantLigaturesProps<T=FontVariantLigaturesProperty> {
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  [FONTVARIANTLIGATURES]: T;
}

export const createFontVariantLigatures = <
  T = FontVariantLigaturesProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontVariantLigaturesProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontVariantLigaturesProps<T>,Theme,Media>({
    cssProp:FONTVARIANTLIGATURES,
    prop:FONTVARIANTLIGATURES,
    key,
    transformValue,
  })

export const createFontVariantLigaturesRule = <T = FontVariantLigaturesProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONTVARIANTLIGATURES, getValue: transformer})

export const fontVariantLigatures =createFontVariantLigatures()

export const fontVariantLigaturesRule =createFontVariantLigaturesRule()
