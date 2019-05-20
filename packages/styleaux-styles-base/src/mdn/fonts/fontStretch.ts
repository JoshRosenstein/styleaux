import { Config } from '../../types';
import { FontStretchProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

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
>(
  config: Config<FontStretchProps<T>, Theme> = {},
) =>
  style<FontStretchProps<T>, Theme, Media>({
    cssProp: FONTSTRETCH,
    prop: FONTSTRETCH,
    ...config,
  });

export const createFontStretchRule = <T = FontStretchProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTSTRETCH, getValue: transformer });

export const fontStretch = createFontStretch();

export const fontStretchRule = createFontStretchRule();
