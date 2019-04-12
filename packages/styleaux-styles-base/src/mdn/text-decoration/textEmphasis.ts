import { TextEmphasisProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTEMPHASIS='textEmphasis'

export interface TextEmphasisProps<T=TextEmphasisProperty> {
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  [TEXTEMPHASIS]: T;
}

export const createTextEmphasis = <
  T = TextEmphasisProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextEmphasisProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextEmphasisProps<T>,Theme,Media>({
    cssProp:TEXTEMPHASIS,
    prop:TEXTEMPHASIS,
    key,
    transformValue,
  })

export const createTextEmphasisRule = <T = TextEmphasisProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTEMPHASIS, getValue: transformer})

export const textEmphasis =createTextEmphasis()

export const textEmphasisRule =createTextEmphasisRule()
