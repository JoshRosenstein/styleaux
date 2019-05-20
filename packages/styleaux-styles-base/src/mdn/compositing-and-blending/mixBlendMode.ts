import { Config } from '../../types';
import { MixBlendModeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MIXBLENDMODE = 'mixBlendMode';

export interface MixBlendModeProps<T = MixBlendModeProperty> {
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  [MIXBLENDMODE]: T;
}

export const createMixBlendMode = <
  T = MixBlendModeProperty,
  Media = never,
  Theme = never
>(
  config: Config<MixBlendModeProps<T>, Theme> = {},
) =>
  style<MixBlendModeProps<T>, Theme, Media>({
    cssProp: MIXBLENDMODE,
    prop: MIXBLENDMODE,
    ...config,
  });

export const createMixBlendModeRule = <T = MixBlendModeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MIXBLENDMODE, getValue: transformer });

export const mixBlendMode = createMixBlendMode();

export const mixBlendModeRule = createMixBlendModeRule();
