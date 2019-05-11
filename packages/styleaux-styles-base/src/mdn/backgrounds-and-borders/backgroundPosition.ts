import { BackgroundPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKGROUNDPOSITION = 'backgroundPosition';

export interface BackgroundPositionProps<T = BackgroundPositionProperty> {
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  [BACKGROUNDPOSITION]: T;
}

export const createBackgroundPosition = <
  T = BackgroundPositionProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<BackgroundPositionProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<BackgroundPositionProps<T>, Theme, Media>({
    cssProp: BACKGROUNDPOSITION,
    prop: BACKGROUNDPOSITION,
    key,
    transformValue,
  });

export const createBackgroundPositionRule = <
  T = BackgroundPositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDPOSITION, getValue: transformer });

export const backgroundPosition = createBackgroundPosition();

export const backgroundPositionRule = createBackgroundPositionRule();
