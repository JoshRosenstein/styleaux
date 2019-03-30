import { FontVariantCapsProperty } from '@roseys/csstype';

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

export const fontVariantCaps = <
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

export const fontVariantCapsRule = <T = FontVariantCapsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTCAPS, getValue: transformer})
