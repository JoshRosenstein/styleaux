import { FontSizeAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTSIZEADJUST='fontSizeAdjust'

export interface IFontSizeAdjustProps<T> {
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust: T;
}

export const createFontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontSizeAdjustProps<T>, Theme, Breakpoints>({
    cssProp: FONTSIZEADJUST,
    prop: FONTSIZEADJUST,
    alias,
    key,
    transformValue,
  })

export const createFontSizeAdjustRule = <T = FontSizeAdjustProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTSIZEADJUST, getValue: transformer})

export const fontSizeAdjust =createFontSizeAdjust()

export const fontSizeAdjustRule =createFontSizeAdjustRule()
