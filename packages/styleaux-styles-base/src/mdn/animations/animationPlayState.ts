import { AnimationPlayStateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONPLAYSTATE = 'animationPlayState';

export interface AnimationPlayStateProps<T = AnimationPlayStateProperty> {
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  [ANIMATIONPLAYSTATE]: T;
}

export const createAnimationPlayState = <
  T = AnimationPlayStateProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<AnimationPlayStateProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<AnimationPlayStateProps<T>, Theme, Media>({
    cssProp: ANIMATIONPLAYSTATE,
    prop: ANIMATIONPLAYSTATE,
    key,
    transformValue,
  });

export const createAnimationPlayStateRule = <
  T = AnimationPlayStateProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONPLAYSTATE, getValue: transformer });

export const animationPlayState = createAnimationPlayState();

export const animationPlayStateRule = createAnimationPlayStateRule();
