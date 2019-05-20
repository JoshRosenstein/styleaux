import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { AnimationDirectionProperty } from '@styleaux/csstype';

const ANIMATIONDIRECTION = 'animationDirection';

export interface AnimationDirectionProps<T = AnimationDirectionProperty> {
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  [ANIMATIONDIRECTION]: T;
}

export const createAnimationDirection = <
  T = AnimationDirectionProperty,
  Media = never,
  Theme = never
>(
  config: Config<AnimationDirectionProps<T>, Theme> = {},
) =>
  style<AnimationDirectionProps<T>, Theme, Media>({
    cssProp: ANIMATIONDIRECTION,
    prop: ANIMATIONDIRECTION,
    ...config,
  });

export const createAnimationDirectionRule = <
  T = AnimationDirectionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONDIRECTION, getValue: transformer });

export const animationDirection = createAnimationDirection();

export const animationDirectionRule = createAnimationDirectionRule();
