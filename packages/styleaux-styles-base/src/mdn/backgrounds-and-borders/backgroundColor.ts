import { BackgroundColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

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
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BackgroundColorProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BackgroundColorProps<T>, Theme, Media>({
    cssProp: BACKGROUNDCOLOR,
    prop: BACKGROUNDCOLOR,
    key,
    transformValue,
  });

export const createBackgroundColorRule = <
  T = BackgroundColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDCOLOR, getValue: transformer });

export const backgroundColor = createBackgroundColor();

export const backgroundColorRule = createBackgroundColorRule();
