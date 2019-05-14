import { TextAlignLastProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTALIGNLAST = 'textAlignLast';

export interface TextAlignLastProps<T = TextAlignLastProperty> {
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  |   No   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  [TEXTALIGNLAST]: T;
}

export const createTextAlignLast = <
  T = TextAlignLastProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextAlignLastProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextAlignLastProps<T>, Theme, Media>({
    cssProp: TEXTALIGNLAST,
    prop: TEXTALIGNLAST,
    key,
    transform,
  });

export const createTextAlignLastRule = <T = TextAlignLastProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTALIGNLAST, getValue: transformer });

export const textAlignLast = createTextAlignLast();

export const textAlignLastRule = createTextAlignLastRule();
