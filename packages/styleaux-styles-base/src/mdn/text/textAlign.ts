import { TextAlignProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTALIGN='textAlign'

export interface TextAlignProps<T=TextAlignProperty> {
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  [TEXTALIGN]: T;
}

export const createTextAlign = <
  T = TextAlignProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextAlignProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextAlignProps<T>,Theme,Media>({
    cssProp:TEXTALIGN,
    prop:TEXTALIGN,
    key,
    transformValue,
  })

export const createTextAlignRule = <T = TextAlignProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTALIGN, getValue: transformer})

export const textAlign =createTextAlign()

export const textAlignRule =createTextAlignRule()
