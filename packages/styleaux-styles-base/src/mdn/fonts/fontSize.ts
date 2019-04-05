import { FontSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTSIZE='fontSize'

export interface IFontSizeProps<T> {
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize: T;
}

export const createFontSize = <
  T = FontSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontSizeProps<T>, Theme, Breakpoints>({
    cssProp: FONTSIZE,
    prop: FONTSIZE,
    alias,
    key,
    transformValue,
  })

export const createFontSizeRule = <T = FontSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTSIZE, getValue: transformer})

export const fontSize =createFontSize()

export const fontSizeRule =createFontSizeRule()
