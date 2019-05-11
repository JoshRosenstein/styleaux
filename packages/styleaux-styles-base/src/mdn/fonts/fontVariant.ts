import { FontVariantProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTVARIANT = 'fontVariant';

export interface FontVariantProps<T = FontVariantProperty> {
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  [FONTVARIANT]: T;
}

export const createFontVariant = <
  T = FontVariantProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<FontVariantProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<FontVariantProps<T>, Theme, Media>({
    cssProp: FONTVARIANT,
    prop: FONTVARIANT,
    key,
    transformValue,
  });

export const createFontVariantRule = <T = FontVariantProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIANT, getValue: transformer });

export const fontVariant = createFontVariant();

export const fontVariantRule = createFontVariantRule();
