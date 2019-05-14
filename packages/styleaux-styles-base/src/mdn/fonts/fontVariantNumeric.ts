import { FontVariantNumericProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

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
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<FontVariantNumericProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<FontVariantNumericProps<T>, Theme, Media>({
    cssProp: FONTVARIANTNUMERIC,
    prop: FONTVARIANTNUMERIC,
    key,
    transform,
  });

export const createFontVariantNumericRule = <
  T = FontVariantNumericProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTNUMERIC, getValue: transformer });

export const fontVariantNumeric = createFontVariantNumeric();

export const fontVariantNumericRule = createFontVariantNumericRule();
