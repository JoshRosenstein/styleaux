import { WordWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const WORDWRAP='wordWrap'

export interface WordWrapProps<T=WordWrapProperty> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  [WORDWRAP]: T;
}

export const createWordWrap = <
  T = WordWrapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<WordWrapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<WordWrapProps<T>,Theme,Media>({
    cssProp:WORDWRAP,
    prop:WORDWRAP,
    key,
    transformValue,
  })

export const createWordWrapRule = <T = WordWrapProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: WORDWRAP, getValue: transformer})

export const wordWrap =createWordWrap()

export const wordWrapRule =createWordWrapRule()
