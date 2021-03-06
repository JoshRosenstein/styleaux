import { Config } from '../../types';
import { AppearanceProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const APPEARANCE = 'appearance';

export interface AppearanceProps<T = AppearanceProperty> {
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  [APPEARANCE]: T;
}

export const createAppearance = <
  T = AppearanceProperty,
  Media = never,
  Theme = never
>(
  config: Config<AppearanceProps<T>, Theme> = {},
) =>
  style<AppearanceProps<T>, Theme, Media>({
    cssProp: APPEARANCE,
    prop: APPEARANCE,
    ...config,
  });

export const createAppearanceRule = <T = AppearanceProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: APPEARANCE, getValue: transformer });

export const appearance = createAppearance();

export const appearanceRule = createAppearanceRule();
