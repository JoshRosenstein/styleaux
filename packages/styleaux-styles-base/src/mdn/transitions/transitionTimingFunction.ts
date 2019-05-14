import { TransitionTimingFunctionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

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
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<TransitionTimingFunctionProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<TransitionTimingFunctionProps<T>, Theme, Media>({
    cssProp: TRANSITIONTIMINGFUNCTION,
    prop: TRANSITIONTIMINGFUNCTION,
    key,
    transform,
  });

export const createTransitionTimingFunctionRule = <
  T = TransitionTimingFunctionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSITIONTIMINGFUNCTION, getValue: transformer });

export const transitionTimingFunction = createTransitionTimingFunction();

export const transitionTimingFunctionRule = createTransitionTimingFunctionRule();
