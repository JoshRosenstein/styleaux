import { TextUnderlinePositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTUNDERLINEPOSITION='textUnderlinePosition'

export interface TextUnderlinePositionProps<T=TextUnderlinePositionProperty> {
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  [TEXTUNDERLINEPOSITION]: T;
}

export const createTextUnderlinePosition = <
  T = TextUnderlinePositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextUnderlinePositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextUnderlinePositionProps<T>,Theme,Media>({
    cssProp:TEXTUNDERLINEPOSITION,
    prop:TEXTUNDERLINEPOSITION,
    key,
    transformValue,
  })

export const createTextUnderlinePositionRule = <T = TextUnderlinePositionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTUNDERLINEPOSITION, getValue: transformer})

export const textUnderlinePosition =createTextUnderlinePosition()

export const textUnderlinePositionRule =createTextUnderlinePositionRule()
