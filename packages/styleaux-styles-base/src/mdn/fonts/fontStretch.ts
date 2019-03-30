import { FontStretchProperty } from '@roseys/csstype';

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

export const fontStretch = <
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

export const fontStretchRule = <T = FontStretchProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTSTRETCH, getValue: transformer})
