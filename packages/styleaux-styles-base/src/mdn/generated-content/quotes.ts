import { QuotesProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const QUOTES='quotes'

export interface IQuotesProps<T> {
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes: T;
}

export const quotes = <
  T = QuotesProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IQuotesProps<T>, Theme, Breakpoints>({
    cssProp: QUOTES,
    prop: QUOTES,
    alias,
    key,
    transformValue,
  })

export const quotesRule = <T = QuotesProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: QUOTES, getValue: transformer})
