import { FontKerningProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTKERNING='fontKerning'

export interface IFontKerningProps<T> {
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning: T;
}

export const createFontKerning = <
  T = FontKerningProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontKerningProps<T>, Theme, Breakpoints>({
    cssProp: FONTKERNING,
    prop: FONTKERNING,
    alias,
    key,
    transformValue,
  })

export const createFontKerningRule = <T = FontKerningProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTKERNING, getValue: transformer})

export const fontKerning =createFontKerning()

export const fontKerningRule =createFontKerningRule()
