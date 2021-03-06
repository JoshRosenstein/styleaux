import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TransitionDelayProperty } from '@styleaux/csstype';

const TRANSITIONDELAY = 'transitionDelay';

export interface TransitionDelayProps<T = TransitionDelayProperty> {
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  [TRANSITIONDELAY]: T;
}

export const createTransitionDelay = <
  T = TransitionDelayProperty,
  Media = never,
  Theme = never
>(
  config: Config<TransitionDelayProps<T>, Theme> = {},
) =>
  style<TransitionDelayProps<T>, Theme, Media>({
    cssProp: TRANSITIONDELAY,
    prop: TRANSITIONDELAY,
    ...config,
  });

export const createTransitionDelayRule = <
  T = TransitionDelayProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONDELAY, getValue: transformer });

export const transitionDelay = createTransitionDelay();

export const transitionDelayRule = createTransitionDelayRule();
