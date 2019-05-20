import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontVariantCapsProperty } from '@styleaux/csstype';

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
>(
  config: Config<FontVariantCapsProps<T>, Theme> = {},
) =>
  style<FontVariantCapsProps<T>, Theme, Media>({
    cssProp: FONTVARIANTCAPS,
    prop: FONTVARIANTCAPS,
    ...config,
  });

export const createFontVariantCapsRule = <
  T = FontVariantCapsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTCAPS, getValue: transformer });

export const fontVariantCaps = createFontVariantCaps();

export const fontVariantCapsRule = createFontVariantCapsRule();
