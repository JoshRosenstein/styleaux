import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundColorProperty } from '@styleaux/csstype';

const BACKGROUNDCOLOR = 'backgroundColor';

export interface BackgroundColorProps<T = BackgroundColorProperty> {
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  [BACKGROUNDCOLOR]: T;
}

export const createBackgroundColor = <
  T = BackgroundColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundColorProps<T>, Theme> = {},
) =>
  style<BackgroundColorProps<T>, Theme, Media>({
    cssProp: BACKGROUNDCOLOR,
    prop: BACKGROUNDCOLOR,
    ...config,
  });

export const createBackgroundColorRule = <
  T = BackgroundColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDCOLOR, getValue: transformer });

export const backgroundColor = createBackgroundColor();

export const backgroundColorRule = createBackgroundColorRule();
