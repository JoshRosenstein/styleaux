import { TextJustifyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTJUSTIFY='textJustify'

export interface TextJustifyProps<T=TextJustifyProperty> {
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  [TEXTJUSTIFY]: T;
}

export const createTextJustify = <
  T = TextJustifyProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextJustifyProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextJustifyProps<T>,Theme,Media>({
    cssProp:TEXTJUSTIFY,
    prop:TEXTJUSTIFY,
    key,
    transformValue,
  })

export const createTextJustifyRule = <T = TextJustifyProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTJUSTIFY, getValue: transformer})

export const textJustify =createTextJustify()

export const textJustifyRule =createTextJustifyRule()
