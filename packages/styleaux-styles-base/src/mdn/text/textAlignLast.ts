import { TextAlignLastProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTALIGNLAST='textAlignLast'

export interface TextAlignLastProps<T=TextAlignLastProperty> {
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  [TEXTALIGNLAST]: T;
}

export const createTextAlignLast = <
  T = TextAlignLastProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextAlignLastProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextAlignLastProps<T>,Theme,Media>({
    cssProp:TEXTALIGNLAST,
    prop:TEXTALIGNLAST,
    key,
    transformValue,
  })

export const createTextAlignLastRule = <T = TextAlignLastProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTALIGNLAST, getValue: transformer})

export const textAlignLast =createTextAlignLast()

export const textAlignLastRule =createTextAlignLastRule()
