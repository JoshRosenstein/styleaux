import { FontKerningProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONTKERNING='fontKerning'

export interface FontKerningProps<T=FontKerningProperty> {
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  [FONTKERNING]: T;
}

export const createFontKerning = <
  T = FontKerningProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontKerningProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontKerningProps<T>,Theme,Media>({
    cssProp:FONTKERNING,
    prop:FONTKERNING,
    key,
    transformValue,
  })

export const createFontKerningRule = <T = FontKerningProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONTKERNING, getValue: transformer})

export const fontKerning =createFontKerning()

export const fontKerningRule =createFontKerningRule()
