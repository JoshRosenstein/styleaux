import { TextShadowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTSHADOW='textShadow'

export interface TextShadowProps<T=TextShadowProperty> {
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  [TEXTSHADOW]: T;
}

export const createTextShadow = <
  T = TextShadowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextShadowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextShadowProps<T>,Theme,Media>({
    cssProp:TEXTSHADOW,
    prop:TEXTSHADOW,
    key,
    transformValue,
  })

export const createTextShadowRule = <T = TextShadowProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTSHADOW, getValue: transformer})

export const textShadow =createTextShadow()

export const textShadowRule =createTextShadowRule()
