import { WordSpacingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WORDSPACING = 'wordSpacing';

export interface WordSpacingProps<T = WordSpacingProperty> {
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  [WORDSPACING]: T;
}

export const createWordSpacing = <
  T = WordSpacingProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<WordSpacingProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<WordSpacingProps<T>, Theme, Media>({
    cssProp: WORDSPACING,
    prop: WORDSPACING,
    key,
    transformValue,
  });

export const createWordSpacingRule = <T = WordSpacingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WORDSPACING, getValue: transformer });

export const wordSpacing = createWordSpacing();

export const wordSpacingRule = createWordSpacingRule();
