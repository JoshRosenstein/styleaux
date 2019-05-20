import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { AnimationDelayProperty } from '@styleaux/csstype';

const ANIMATIONDELAY = 'animationDelay';

export interface AnimationDelayProps<T = AnimationDelayProperty> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  [ANIMATIONDELAY]: T;
}

export const createAnimationDelay = <
  T = AnimationDelayProperty,
  Media = never,
  Theme = never
>(
  config: Config<AnimationDelayProps<T>, Theme> = {},
) =>
  style<AnimationDelayProps<T>, Theme, Media>({
    cssProp: ANIMATIONDELAY,
    prop: ANIMATIONDELAY,
    ...config,
  });

export const createAnimationDelayRule = <
  T = AnimationDelayProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONDELAY, getValue: transformer });

export const animationDelay = createAnimationDelay();

export const animationDelayRule = createAnimationDelayRule();
