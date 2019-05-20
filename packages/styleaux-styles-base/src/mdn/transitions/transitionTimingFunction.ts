import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TransitionTimingFunctionProperty } from '@styleaux/csstype';

const TRANSITIONTIMINGFUNCTION = 'transitionTimingFunction';

export interface TransitionTimingFunctionProps<
  T = TransitionTimingFunctionProperty
> {
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox |    Safari     |  Edge  |   IE   |
   * | :----: | :-----: | :-----------: | :----: | :----: |
   * | **26** | **16**  | **3.1** _-x-_ | **12** | **10** |
   * |        | 4 _-x-_ |               |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  [TRANSITIONTIMINGFUNCTION]: T;
}

export const createTransitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Media = never,
  Theme = never
>(
  config: Config<TransitionTimingFunctionProps<T>, Theme> = {},
) =>
  style<TransitionTimingFunctionProps<T>, Theme, Media>({
    cssProp: TRANSITIONTIMINGFUNCTION,
    prop: TRANSITIONTIMINGFUNCTION,
    ...config,
  });

export const createTransitionTimingFunctionRule = <
  T = TransitionTimingFunctionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONTIMINGFUNCTION, getValue: transformer });

export const transitionTimingFunction = createTransitionTimingFunction();

export const transitionTimingFunctionRule = createTransitionTimingFunctionRule();
