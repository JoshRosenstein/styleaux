import { FontVariantNumericProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTVARIANTNUMERIC='fontVariantNumeric'

export interface IFontVariantNumericProps<T> {
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric: T;
}

export const fontVariantNumeric = <
  T = FontVariantNumericProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontVariantNumericProps<T>, Theme, Breakpoints>({
    cssProp: FONTVARIANTNUMERIC,
    prop: FONTVARIANTNUMERIC,
    alias,
    key,
    transformValue,
  })

export const fontVariantNumericRule = <T = FontVariantNumericProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTNUMERIC, getValue: transformer})
