import { FontStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTSTYLE = 'fontStyle';

export interface FontStyleProps<T = FontStyleProperty> {
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  [FONTSTYLE]: T;
}

export const createFontStyle = <
  T = FontStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<FontStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<FontStyleProps<T>, Theme, Media>({
    cssProp: FONTSTYLE,
    prop: FONTSTYLE,
    key,
    transform,
  });

export const createFontStyleRule = <T = FontStyleProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTSTYLE, getValue: transformer });

export const fontStyle = createFontStyle();

export const fontStyleRule = createFontStyleRule();
