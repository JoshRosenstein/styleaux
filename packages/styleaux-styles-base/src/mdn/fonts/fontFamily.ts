import { FontFamilyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTFAMILY='fontFamily'

export interface IFontFamilyProps<T> {
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily: T;
}

export const createFontFamily = <
  T = FontFamilyProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontFamilyProps<T>, Theme, Breakpoints>({
    cssProp: FONTFAMILY,
    prop: FONTFAMILY,
    alias,
    key,
    transformValue,
  })

export const createFontFamilyRule = <T = FontFamilyProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTFAMILY, getValue: transformer})

export const fontFamily =createFontFamily()

export const fontFamilyRule =createFontFamilyRule()
