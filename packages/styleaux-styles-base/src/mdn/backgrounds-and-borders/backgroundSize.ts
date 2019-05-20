import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundSizeProperty } from '@styleaux/csstype';

const BACKGROUNDSIZE = 'backgroundSize';

export interface BackgroundSizeProps<T = BackgroundSizeProperty> {
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  [BACKGROUNDSIZE]: T;
}

export const createBackgroundSize = <
  T = BackgroundSizeProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundSizeProps<T>, Theme> = {},
) =>
  style<BackgroundSizeProps<T>, Theme, Media>({
    cssProp: BACKGROUNDSIZE,
    prop: BACKGROUNDSIZE,
    ...config,
  });

export const createBackgroundSizeRule = <
  T = BackgroundSizeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDSIZE, getValue: transformer });

export const backgroundSize = createBackgroundSize();

export const backgroundSizeRule = createBackgroundSizeRule();
