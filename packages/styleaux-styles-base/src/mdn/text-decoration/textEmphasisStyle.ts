import { TextEmphasisStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTEMPHASISSTYLE='textEmphasisStyle'

export interface TextEmphasisStyleProps<T=TextEmphasisStyleProperty> {
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  [TEXTEMPHASISSTYLE]: T;
}

export const createTextEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextEmphasisStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextEmphasisStyleProps<T>,Theme,Media>({
    cssProp:TEXTEMPHASISSTYLE,
    prop:TEXTEMPHASISSTYLE,
    key,
    transformValue,
  })

export const createTextEmphasisStyleRule = <T = TextEmphasisStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTEMPHASISSTYLE, getValue: transformer})

export const textEmphasisStyle =createTextEmphasisStyle()

export const textEmphasisStyleRule =createTextEmphasisStyleRule()
