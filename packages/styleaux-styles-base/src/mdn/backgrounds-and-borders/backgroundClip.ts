import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundClipProperty } from '@styleaux/csstype';

const BACKGROUNDCLIP = 'backgroundClip';

export interface BackgroundClipProps<T = BackgroundClipProperty> {
  /**
   * The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |  IE   |
   * | :----: | :-----: | :---------: | :----: | :---: |
   * | **1**  |  **4**  | **3** _-x-_ | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  [BACKGROUNDCLIP]: T;
}

export const createBackgroundClip = <
  T = BackgroundClipProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundClipProps<T>, Theme> = {},
) =>
  style<BackgroundClipProps<T>, Theme, Media>({
    cssProp: BACKGROUNDCLIP,
    prop: BACKGROUNDCLIP,
    ...config,
  });

export const createBackgroundClipRule = <
  T = BackgroundClipProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDCLIP, getValue: transformer });

export const backgroundClip = createBackgroundClip();

export const backgroundClipRule = createBackgroundClipRule();
