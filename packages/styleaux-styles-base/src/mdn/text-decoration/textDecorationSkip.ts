import { TextDecorationSkipProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATIONSKIP='textDecorationSkip'

export interface TextDecorationSkipProps<T=TextDecorationSkipProperty> {
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  [TEXTDECORATIONSKIP]: T;
}

export const createTextDecorationSkip = <
  T = TextDecorationSkipProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextDecorationSkipProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextDecorationSkipProps<T>,Theme,Media>({
    cssProp:TEXTDECORATIONSKIP,
    prop:TEXTDECORATIONSKIP,
    key,
    transformValue,
  })

export const createTextDecorationSkipRule = <T = TextDecorationSkipProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TEXTDECORATIONSKIP, getValue: transformer})

export const textDecorationSkip =createTextDecorationSkip()

export const textDecorationSkipRule =createTextDecorationSkipRule()
