import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundPositionXProperty } from '@styleaux/csstype';

const BACKGROUNDPOSITIONX = 'backgroundPositionX';

export interface BackgroundPositionXProps<T = BackgroundPositionXProperty> {
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  [BACKGROUNDPOSITIONX]: T;
}

export const createBackgroundPositionX = <
  T = BackgroundPositionXProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundPositionXProps<T>, Theme> = {},
) =>
  style<BackgroundPositionXProps<T>, Theme, Media>({
    cssProp: BACKGROUNDPOSITIONX,
    prop: BACKGROUNDPOSITIONX,
    ...config,
  });

export const createBackgroundPositionXRule = <
  T = BackgroundPositionXProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDPOSITIONX, getValue: transformer });

export const backgroundPositionX = createBackgroundPositionX();

export const backgroundPositionXRule = createBackgroundPositionXRule();
