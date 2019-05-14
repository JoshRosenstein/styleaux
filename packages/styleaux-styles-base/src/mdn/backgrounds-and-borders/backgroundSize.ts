import { BackgroundSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

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
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BackgroundSizeProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BackgroundSizeProps<T>, Theme, Media>({
    cssProp: BACKGROUNDSIZE,
    prop: BACKGROUNDSIZE,
    key,
    transform,
  });

export const createBackgroundSizeRule = <
  T = BackgroundSizeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDSIZE, getValue: transformer });

export const backgroundSize = createBackgroundSize();

export const backgroundSizeRule = createBackgroundSizeRule();
