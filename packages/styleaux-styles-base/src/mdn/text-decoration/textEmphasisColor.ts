import { TextEmphasisColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTEMPHASISCOLOR='textEmphasisColor'

export interface TextEmphasisColorProps<T=TextEmphasisColorProperty> {
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  [TEXTEMPHASISCOLOR]: T;
}

export const createTextEmphasisColor = <
  T = TextEmphasisColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextEmphasisColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextEmphasisColorProps<T>,Theme,Media>({
    cssProp:TEXTEMPHASISCOLOR,
    prop:TEXTEMPHASISCOLOR,
    key,
    transformValue,
  })

export const createTextEmphasisColorRule = <T = TextEmphasisColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTEMPHASISCOLOR, getValue: transformer})

export const textEmphasisColor =createTextEmphasisColor()

export const textEmphasisColorRule =createTextEmphasisColorRule()
