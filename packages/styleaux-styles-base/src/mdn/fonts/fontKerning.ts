import { Config } from '../../types';
import { FontKerningProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

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
>(
  config: Config<FontKerningProps<T>, Theme> = {},
) =>
  style<FontKerningProps<T>, Theme, Media>({
    cssProp: FONTKERNING,
    prop: FONTKERNING,
    ...config,
  });

export const createFontKerningRule = <T = FontKerningProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTKERNING, getValue: transformer });

export const fontKerning = createFontKerning();

export const fontKerningRule = createFontKerningRule();
