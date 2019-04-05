import { FontVariantNumericProperty } from '@styleaux/csstype';

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

export const createFontVariantNumeric = <
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

export const createFontVariantNumericRule = <T = FontVariantNumericProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIANTNUMERIC, getValue: transformer})

export const fontVariantNumeric =createFontVariantNumeric()

export const fontVariantNumericRule =createFontVariantNumericRule()
