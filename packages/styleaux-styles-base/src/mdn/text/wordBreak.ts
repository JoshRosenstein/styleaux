import { WordBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WORDBREAK = 'wordBreak';

export interface WordBreakProps<T = WordBreakProperty> {
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  [WORDBREAK]: T;
}

export const createWordBreak = <
  T = WordBreakProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<WordBreakProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<WordBreakProps<T>, Theme, Media>({
    cssProp: WORDBREAK,
    prop: WORDBREAK,
    key,
    transformValue,
  });

export const createWordBreakRule = <T = WordBreakProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WORDBREAK, getValue: transformer });

export const wordBreak = createWordBreak();

export const wordBreakRule = createWordBreakRule();
