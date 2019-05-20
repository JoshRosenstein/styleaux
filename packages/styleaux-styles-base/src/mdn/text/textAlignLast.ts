import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextAlignLastProperty } from '@styleaux/csstype';

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
>(
  config: Config<TextAlignLastProps<T>, Theme> = {},
) =>
  style<TextAlignLastProps<T>, Theme, Media>({
    cssProp: TEXTALIGNLAST,
    prop: TEXTALIGNLAST,
    ...config,
  });

export const createTextAlignLastRule = <T = TextAlignLastProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTALIGNLAST, getValue: transformer });

export const textAlignLast = createTextAlignLast();

export const textAlignLastRule = createTextAlignLastRule();
