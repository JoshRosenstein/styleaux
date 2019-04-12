import { TextEmphasisPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTEMPHASISPOSITION='textEmphasisPosition'

export interface TextEmphasisPositionProps<T=TextEmphasisPositionProperty> {
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  [TEXTEMPHASISPOSITION]: T;
}

export const createTextEmphasisPosition = <
  T = TextEmphasisPositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextEmphasisPositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextEmphasisPositionProps<T>,Theme,Media>({
    cssProp:TEXTEMPHASISPOSITION,
    prop:TEXTEMPHASISPOSITION,
    key,
    transformValue,
  })

export const createTextEmphasisPositionRule = <T = TextEmphasisPositionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTEMPHASISPOSITION, getValue: transformer})

export const textEmphasisPosition =createTextEmphasisPosition()

export const textEmphasisPositionRule =createTextEmphasisPositionRule()
