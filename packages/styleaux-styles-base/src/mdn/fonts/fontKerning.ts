import { FontKerningProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTKERNING = 'fontKerning';

export interface FontKerningProps<T = FontKerningProperty> {
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  [FONTKERNING]: T;
}

export const createFontKerning = <
  T = FontKerningProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<FontKerningProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<FontKerningProps<T>, Theme, Media>({
    cssProp: FONTKERNING,
    prop: FONTKERNING,
    key,
    transform,
  });

export const createFontKerningRule = <T = FontKerningProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTKERNING, getValue: transformer });

export const fontKerning = createFontKerning();

export const fontKerningRule = createFontKerningRule();
