import { BackgroundPositionYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKGROUNDPOSITIONY = 'backgroundPositionY';

export interface BackgroundPositionYProps<T = BackgroundPositionYProperty> {
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  [BACKGROUNDPOSITIONY]: T;
}

export const createBackgroundPositionY = <
  T = BackgroundPositionYProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<BackgroundPositionYProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<BackgroundPositionYProps<T>, Theme, Media>({
    cssProp: BACKGROUNDPOSITIONY,
    prop: BACKGROUNDPOSITIONY,
    key,
    transformValue,
  });

export const createBackgroundPositionYRule = <
  T = BackgroundPositionYProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDPOSITIONY, getValue: transformer });

export const backgroundPositionY = createBackgroundPositionY();

export const backgroundPositionYRule = createBackgroundPositionYRule();
