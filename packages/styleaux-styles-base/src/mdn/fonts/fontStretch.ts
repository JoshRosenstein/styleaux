import { FontStretchProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTSTRETCH = 'fontStretch';

export interface FontStretchProps<T = FontStretchProperty> {
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **60** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  [FONTSTRETCH]: T;
}

export const createFontStretch = <
  T = FontStretchProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<FontStretchProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<FontStretchProps<T>, Theme, Media>({
    cssProp: FONTSTRETCH,
    prop: FONTSTRETCH,
    key,
    transformValue,
  });

export const createFontStretchRule = <T = FontStretchProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTSTRETCH, getValue: transformer });

export const fontStretch = createFontStretch();

export const fontStretchRule = createFontStretchRule();
