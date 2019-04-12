import { TextDecorationColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTDECORATIONCOLOR='textDecorationColor'

export interface TextDecorationColorProps<T=TextDecorationColorProperty> {
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  [TEXTDECORATIONCOLOR]: T;
}

export const createTextDecorationColor = <
  T = TextDecorationColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextDecorationColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextDecorationColorProps<T>,Theme,Media>({
    cssProp:TEXTDECORATIONCOLOR,
    prop:TEXTDECORATIONCOLOR,
    key,
    transformValue,
  })

export const createTextDecorationColorRule = <T = TextDecorationColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTDECORATIONCOLOR, getValue: transformer})

export const textDecorationColor =createTextDecorationColor()

export const textDecorationColorRule =createTextDecorationColorRule()
