import { FontVariantLigaturesProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTVARIANTLIGATURES='fontVariantLigatures'

export interface IFontVariantLigaturesProps<T> {
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures: T;
}

export const createFontVariantLigatures = <
  T = FontVariantLigaturesProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontVariantLigaturesProps<T>, Theme, Breakpoints>({
    cssProp: FONTVARIANTLIGATURES,
    prop: FONTVARIANTLIGATURES,
    alias,
    key,
    transformValue,
  })

export const createFontVariantLigaturesRule = <T = FontVariantLigaturesProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTLIGATURES, getValue: transformer})

export const fontVariantLigatures =createFontVariantLigatures()

export const fontVariantLigaturesRule =createFontVariantLigaturesRule()
