import { FontVariantLigaturesProperty } from '@roseys/csstype';

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

export const fontVariantLigatures = <
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

export const fontVariantLigaturesRule = <T = FontVariantLigaturesProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTLIGATURES, getValue: transformer})
