import { Config } from '../../types';
import { BackgroundProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BACKGROUND = 'background';

export interface BackgroundProps<T = BackgroundProperty> {
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  [BACKGROUND]: T;
}

export const createBackground = <
  T = BackgroundProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundProps<T>, Theme> = {},
) =>
  style<BackgroundProps<T>, Theme, Media>({
    cssProp: BACKGROUND,
    prop: BACKGROUND,
    ...config,
  });

export const createBackgroundRule = <T = BackgroundProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUND, getValue: transformer });

export const background = createBackground();

export const backgroundRule = createBackgroundRule();
