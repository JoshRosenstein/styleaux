import { TextDecorationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATION='textDecoration'

export interface TextDecorationProps<T=TextDecorationProperty> {
  /**
   * The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  [TEXTDECORATION]: T;
}

export const createTextDecoration = <
  T = TextDecorationProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextDecorationProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextDecorationProps<T>,Theme,Media>({
    cssProp:TEXTDECORATION,
    prop:TEXTDECORATION,
    key,
    transformValue,
  })

export const createTextDecorationRule = <T = TextDecorationProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TEXTDECORATION, getValue: transformer})

export const textDecoration =createTextDecoration()

export const textDecorationRule =createTextDecorationRule()
