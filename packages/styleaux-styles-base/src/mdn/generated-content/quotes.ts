import { QuotesProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const QUOTES='quotes'

export interface QuotesProps<T=QuotesProperty> {
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  [QUOTES]: T;
}

export const createQuotes = <
  T = QuotesProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<QuotesProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<QuotesProps<T>,Theme,Media>({
    cssProp:QUOTES,
    prop:QUOTES,
    key,
    transformValue,
  })

export const createQuotesRule = <T = QuotesProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: QUOTES, getValue: transformer})

export const quotes =createQuotes()

export const quotesRule =createQuotesRule()
