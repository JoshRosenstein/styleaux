import { Config } from '../../types';
import { FontSizeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const FONTSIZE = 'fontSize';

export interface FontSizeProps<T = FontSizeProperty> {
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  [FONTSIZE]: T;
}

export const createFontSize = <
  T = FontSizeProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontSizeProps<T>, Theme> = {},
) =>
  style<FontSizeProps<T>, Theme, Media>({
    cssProp: FONTSIZE,
    prop: FONTSIZE,
    ...config,
  });

export const createFontSizeRule = <T = FontSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTSIZE, getValue: transformer });

export const fontSize = createFontSize();

export const fontSizeRule = createFontSizeRule();
