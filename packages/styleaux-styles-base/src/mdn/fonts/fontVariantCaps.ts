import { FontVariantCapsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTVARIANTCAPS = 'fontVariantCaps';

export interface FontVariantCapsProps<T = FontVariantCapsProperty> {
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  [FONTVARIANTCAPS]: T;
}

export const createFontVariantCaps = <
  T = FontVariantCapsProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<FontVariantCapsProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<FontVariantCapsProps<T>, Theme, Media>({
    cssProp: FONTVARIANTCAPS,
    prop: FONTVARIANTCAPS,
    key,
    transformValue,
  });

export const createFontVariantCapsRule = <
  T = FontVariantCapsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTCAPS, getValue: transformer });

export const fontVariantCaps = createFontVariantCaps();

export const fontVariantCapsRule = createFontVariantCapsRule();
