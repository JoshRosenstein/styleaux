import { Config } from '../../types';
import { AnimationProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const ANIMATION = 'animation';

export interface AnimationProps<T = AnimationProperty> {
  /**
   * The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  [ANIMATION]: T;
}

export const createAnimation = <
  T = AnimationProperty,
  Media = never,
  Theme = never
>(
  config: Config<AnimationProps<T>, Theme> = {},
) =>
  style<AnimationProps<T>, Theme, Media>({
    cssProp: ANIMATION,
    prop: ANIMATION,
    ...config,
  });

export const createAnimationRule = <T = AnimationProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATION, getValue: transformer });

export const animation = createAnimation();

export const animationRule = createAnimationRule();
