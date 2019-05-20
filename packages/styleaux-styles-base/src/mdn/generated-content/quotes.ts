import { Config } from '../../types';
import { QuotesProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const QUOTES = 'quotes';

export interface QuotesProps<T = QuotesProperty> {
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  [QUOTES]: T;
}

export const createQuotes = <T = QuotesProperty, Media = never, Theme = never>(
  config: Config<QuotesProps<T>, Theme> = {},
) =>
  style<QuotesProps<T>, Theme, Media>({
    cssProp: QUOTES,
    prop: QUOTES,
    ...config,
  });

export const createQuotesRule = <T = QuotesProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: QUOTES, getValue: transformer });

export const quotes = createQuotes();

export const quotesRule = createQuotesRule();
