import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundRepeatProperty } from '@styleaux/csstype';

const BACKGROUNDREPEAT = 'backgroundRepeat';

export interface BackgroundRepeatProps<T = BackgroundRepeatProperty> {
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  [BACKGROUNDREPEAT]: T;
}

export const createBackgroundRepeat = <
  T = BackgroundRepeatProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundRepeatProps<T>, Theme> = {},
) =>
  style<BackgroundRepeatProps<T>, Theme, Media>({
    cssProp: BACKGROUNDREPEAT,
    prop: BACKGROUNDREPEAT,
    ...config,
  });

export const createBackgroundRepeatRule = <
  T = BackgroundRepeatProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDREPEAT, getValue: transformer });

export const backgroundRepeat = createBackgroundRepeat();

export const backgroundRepeatRule = createBackgroundRepeatRule();
