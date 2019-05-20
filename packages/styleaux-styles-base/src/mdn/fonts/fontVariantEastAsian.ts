import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontVariantEastAsianProperty } from '@styleaux/csstype';

const FONTVARIANTEASTASIAN = 'fontVariantEastAsian';

export interface FontVariantEastAsianProps<T = FontVariantEastAsianProperty> {
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  [FONTVARIANTEASTASIAN]: T;
}

export const createFontVariantEastAsian = <
  T = FontVariantEastAsianProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontVariantEastAsianProps<T>, Theme> = {},
) =>
  style<FontVariantEastAsianProps<T>, Theme, Media>({
    cssProp: FONTVARIANTEASTASIAN,
    prop: FONTVARIANTEASTASIAN,
    ...config,
  });

export const createFontVariantEastAsianRule = <
  T = FontVariantEastAsianProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTEASTASIAN, getValue: transformer });

export const fontVariantEastAsian = createFontVariantEastAsian();

export const fontVariantEastAsianRule = createFontVariantEastAsianRule();
