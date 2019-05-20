import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundImageProperty } from '@styleaux/csstype';

const BACKGROUNDIMAGE = 'backgroundImage';

export interface BackgroundImageProps<T = BackgroundImageProperty> {
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  [BACKGROUNDIMAGE]: T;
}

export const createBackgroundImage = <
  T = BackgroundImageProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundImageProps<T>, Theme> = {},
) =>
  style<BackgroundImageProps<T>, Theme, Media>({
    cssProp: BACKGROUNDIMAGE,
    prop: BACKGROUNDIMAGE,
    ...config,
  });

export const createBackgroundImageRule = <
  T = BackgroundImageProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDIMAGE, getValue: transformer });

export const backgroundImage = createBackgroundImage();

export const backgroundImageRule = createBackgroundImageRule();
