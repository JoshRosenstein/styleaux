import { FontWeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTWEIGHT='fontWeight'

export interface FontWeightProps<T=FontWeightProperty> {
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  [FONTWEIGHT]: T;
}

export const createFontWeight = <
  T = FontWeightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontWeightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontWeightProps<T>,Theme,Media>({
    cssProp:FONTWEIGHT,
    prop:FONTWEIGHT,
    key,
    transformValue,
  })

export const createFontWeightRule = <T = FontWeightProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FONTWEIGHT, getValue: transformer})

export const fontWeight =createFontWeight()

export const fontWeightRule =createFontWeightRule()
