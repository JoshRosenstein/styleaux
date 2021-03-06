import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontSizeAdjustProperty } from '@styleaux/csstype';

const FONTSIZEADJUST = 'fontSizeAdjust';

export interface FontSizeAdjustProps<T = FontSizeAdjustProperty> {
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  [FONTSIZEADJUST]: T;
}

export const createFontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Media = never,
  Theme = never
>(
  config: Config<FontSizeAdjustProps<T>, Theme> = {},
) =>
  style<FontSizeAdjustProps<T>, Theme, Media>({
    cssProp: FONTSIZEADJUST,
    prop: FONTSIZEADJUST,
    ...config,
  });

export const createFontSizeAdjustRule = <
  T = FontSizeAdjustProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTSIZEADJUST, getValue: transformer });

export const fontSizeAdjust = createFontSizeAdjust();

export const fontSizeAdjustRule = createFontSizeAdjustRule();
