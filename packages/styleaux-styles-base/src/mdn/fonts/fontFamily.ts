import { Config } from '../../types';
import { FontFamilyProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const FONTFAMILY = 'fontFamily';

export interface FontFamilyProps<T = FontFamilyProperty> {
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  [FONTFAMILY]: T;
}

export const createFontFamily = <
  T = FontFamilyProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontFamilyProps<T>, Theme> = {},
) =>
  style<FontFamilyProps<T>, Theme, Media>({
    cssProp: FONTFAMILY,
    prop: FONTFAMILY,
    ...config,
  });

export const createFontFamilyRule = <T = FontFamilyProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTFAMILY, getValue: transformer });

export const fontFamily = createFontFamily();

export const fontFamilyRule = createFontFamilyRule();
