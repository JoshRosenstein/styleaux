import { FontVariantCapsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTVARIANTCAPS='fontVariantCaps'

export interface IFontVariantCapsProps<T> {
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps: T;
}

export const createFontVariantCaps = <
  T = FontVariantCapsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontVariantCapsProps<T>, Theme, Breakpoints>({
    cssProp: FONTVARIANTCAPS,
    prop: FONTVARIANTCAPS,
    alias,
    key,
    transformValue,
  })

export const createFontVariantCapsRule = <T = FontVariantCapsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTCAPS, getValue: transformer})

export const fontVariantCaps =createFontVariantCaps()

export const fontVariantCapsRule =createFontVariantCapsRule()
