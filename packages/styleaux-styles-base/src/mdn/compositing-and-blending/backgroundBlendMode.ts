import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundBlendModeProperty } from '@styleaux/csstype';

const BACKGROUNDBLENDMODE = 'backgroundBlendMode';

export interface BackgroundBlendModeProps<T = BackgroundBlendModeProperty> {
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  [BACKGROUNDBLENDMODE]: T;
}

export const createBackgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundBlendModeProps<T>, Theme> = {},
) =>
  style<BackgroundBlendModeProps<T>, Theme, Media>({
    cssProp: BACKGROUNDBLENDMODE,
    prop: BACKGROUNDBLENDMODE,
    ...config,
  });

export const createBackgroundBlendModeRule = <
  T = BackgroundBlendModeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDBLENDMODE, getValue: transformer });

export const backgroundBlendMode = createBackgroundBlendMode();

export const backgroundBlendModeRule = createBackgroundBlendModeRule();
