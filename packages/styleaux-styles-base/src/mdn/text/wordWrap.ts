import { WordWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WORDWRAP = 'wordWrap';

export interface WordWrapProps<T = WordWrapProperty> {
  /**
   * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **2**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  [WORDWRAP]: T;
}

export const createWordWrap = <
  T = WordWrapProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<WordWrapProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<WordWrapProps<T>, Theme, Media>({
    cssProp: WORDWRAP,
    prop: WORDWRAP,
    key,
    transform,
  });

export const createWordWrapRule = <T = WordWrapProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WORDWRAP, getValue: transformer });

export const wordWrap = createWordWrap();

export const wordWrapRule = createWordWrapRule();
