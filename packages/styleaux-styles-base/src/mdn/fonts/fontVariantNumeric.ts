import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontVariantNumericProperty } from '@styleaux/csstype';

const FONTVARIANTNUMERIC = 'fontVariantNumeric';

export interface FontVariantNumericProps<T = FontVariantNumericProperty> {
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  [FONTVARIANTNUMERIC]: T;
}

export const createFontVariantNumeric = <
  T = FontVariantNumericProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontVariantNumericProps<T>, Theme> = {},
) =>
  style<FontVariantNumericProps<T>, Theme, Media>({
    cssProp: FONTVARIANTNUMERIC,
    prop: FONTVARIANTNUMERIC,
    ...config,
  });

export const createFontVariantNumericRule = <
  T = FontVariantNumericProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTNUMERIC, getValue: transformer });

export const fontVariantNumeric = createFontVariantNumeric();

export const fontVariantNumericRule = createFontVariantNumericRule();
