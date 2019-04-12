import { TextIndentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTINDENT='textIndent'

export interface TextIndentProps<T=TextIndentProperty> {
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  [TEXTINDENT]: T;
}

export const createTextIndent = <
  T = TextIndentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextIndentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextIndentProps<T>,Theme,Media>({
    cssProp:TEXTINDENT,
    prop:TEXTINDENT,
    key,
    transformValue,
  })

export const createTextIndentRule = <T = TextIndentProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTINDENT, getValue: transformer})

export const textIndent =createTextIndent()

export const textIndentRule =createTextIndentRule()
