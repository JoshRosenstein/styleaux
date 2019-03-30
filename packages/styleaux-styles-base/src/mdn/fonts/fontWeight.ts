import { FontWeightProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTWEIGHT='fontWeight'

export interface IFontWeightProps<T> {
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight: T;
}

export const fontWeight = <
  T = FontWeightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontWeightProps<T>, Theme, Breakpoints>({
    cssProp: FONTWEIGHT,
    prop: FONTWEIGHT,
    alias,
    key,
    transformValue,
  })

export const fontWeightRule = <T = FontWeightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTWEIGHT, getValue: transformer})
