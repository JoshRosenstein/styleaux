import { FontStretchProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTSTRETCH='fontStretch'

export interface IFontStretchProps<T> {
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch: T;
}

export const createFontStretch = <
  T = FontStretchProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontStretchProps<T>, Theme, Breakpoints>({
    cssProp: FONTSTRETCH,
    prop: FONTSTRETCH,
    alias,
    key,
    transformValue,
  })

export const createFontStretchRule = <T = FontStretchProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTSTRETCH, getValue: transformer})

export const fontStretch =createFontStretch()

export const fontStretchRule =createFontStretchRule()
