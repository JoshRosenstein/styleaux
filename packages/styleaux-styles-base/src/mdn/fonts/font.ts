import { FontProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONT='font'

export interface FontProps<T=FontProperty> {
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  [FONT]: T;
}

export const createFont = <
  T = FontProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontProps<T>,Theme,Media>({
    cssProp:FONT,
    prop:FONT,
    key,
    transformValue,
  })

export const createFontRule = <T = FontProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONT, getValue: transformer})

export const font =createFont()

export const fontRule =createFontRule()
