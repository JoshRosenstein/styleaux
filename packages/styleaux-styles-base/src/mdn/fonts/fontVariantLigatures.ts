import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontVariantLigaturesProperty } from '@styleaux/csstype';

const FONTVARIANTLIGATURES = 'fontVariantLigatures';

export interface FontVariantLigaturesProps<T = FontVariantLigaturesProperty> {
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  [FONTVARIANTLIGATURES]: T;
}

export const createFontVariantLigatures = <
  T = FontVariantLigaturesProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontVariantLigaturesProps<T>, Theme> = {},
) =>
  style<FontVariantLigaturesProps<T>, Theme, Media>({
    cssProp: FONTVARIANTLIGATURES,
    prop: FONTVARIANTLIGATURES,
    ...config,
  });

export const createFontVariantLigaturesRule = <
  T = FontVariantLigaturesProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANTLIGATURES, getValue: transformer });

export const fontVariantLigatures = createFontVariantLigatures();

export const fontVariantLigaturesRule = createFontVariantLigaturesRule();
