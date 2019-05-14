import { AnimationTimingFunctionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONTIMINGFUNCTION = 'animationTimingFunction';

export interface AnimationTimingFunctionProps<
  T = AnimationTimingFunctionProperty
> {
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  [ANIMATIONTIMINGFUNCTION]: T;
}

export const createAnimationTimingFunction = <
  T = AnimationTimingFunctionProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<AnimationTimingFunctionProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<AnimationTimingFunctionProps<T>, Theme, Media>({
    cssProp: ANIMATIONTIMINGFUNCTION,
    prop: ANIMATIONTIMINGFUNCTION,
    key,
    transform,
  });

export const createAnimationTimingFunctionRule = <
  T = AnimationTimingFunctionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONTIMINGFUNCTION, getValue: transformer });

export const animationTimingFunction = createAnimationTimingFunction();

export const animationTimingFunctionRule = createAnimationTimingFunctionRule();
