import { FontSizeAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONTSIZEADJUST='fontSizeAdjust'

export interface FontSizeAdjustProps<T=FontSizeAdjustProperty> {
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  [FONTSIZEADJUST]: T;
}

export const createFontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontSizeAdjustProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontSizeAdjustProps<T>,Theme,Media>({
    cssProp:FONTSIZEADJUST,
    prop:FONTSIZEADJUST,
    key,
    transformValue,
  })

export const createFontSizeAdjustRule = <T = FontSizeAdjustProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONTSIZEADJUST, getValue: transformer})

export const fontSizeAdjust =createFontSizeAdjust()

export const fontSizeAdjustRule =createFontSizeAdjustRule()
