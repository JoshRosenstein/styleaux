import { BackgroundOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKGROUNDORIGIN = 'backgroundOrigin';

export interface BackgroundOriginProps<T = BackgroundOriginProperty> {
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  [BACKGROUNDORIGIN]: T;
}

export const createBackgroundOrigin = <
  T = BackgroundOriginProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BackgroundOriginProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BackgroundOriginProps<T>, Theme, Media>({
    cssProp: BACKGROUNDORIGIN,
    prop: BACKGROUNDORIGIN,
    key,
    transformValue,
  });

export const createBackgroundOriginRule = <
  T = BackgroundOriginProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDORIGIN, getValue: transformer });

export const backgroundOrigin = createBackgroundOrigin();

export const backgroundOriginRule = createBackgroundOriginRule();
