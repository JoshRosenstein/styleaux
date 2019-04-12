import { TextTransformProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTTRANSFORM='textTransform'

export interface TextTransformProps<T=TextTransformProperty> {
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  [TEXTTRANSFORM]: T;
}

export const createTextTransform = <
  T = TextTransformProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextTransformProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextTransformProps<T>,Theme,Media>({
    cssProp:TEXTTRANSFORM,
    prop:TEXTTRANSFORM,
    key,
    transformValue,
  })

export const createTextTransformRule = <T = TextTransformProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TEXTTRANSFORM, getValue: transformer})

export const textTransform =createTextTransform()

export const textTransformRule =createTextTransformRule()
