import { TextIndentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTINDENT = 'textIndent';

export interface TextIndentProps<T = TextIndentProperty> {
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  [TEXTINDENT]: T;
}

export const createTextIndent = <
  T = TextIndentProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextIndentProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextIndentProps<T>, Theme, Media>({
    cssProp: TEXTINDENT,
    prop: TEXTINDENT,
    key,
    transform,
  });

export const createTextIndentRule = <T = TextIndentProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTINDENT, getValue: transformer });

export const textIndent = createTextIndent();

export const textIndentRule = createTextIndentRule();
