import { AnimationIterationCountProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONITERATIONCOUNT = 'animationIterationCount';

export interface AnimationIterationCountProps<
  T = AnimationIterationCountProperty
> {
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  [ANIMATIONITERATIONCOUNT]: T;
}

export const createAnimationIterationCount = <
  T = AnimationIterationCountProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<AnimationIterationCountProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<AnimationIterationCountProps<T>, Theme, Media>({
    cssProp: ANIMATIONITERATIONCOUNT,
    prop: ANIMATIONITERATIONCOUNT,
    key,
    transform,
  });

export const createAnimationIterationCountRule = <
  T = AnimationIterationCountProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ANIMATIONITERATIONCOUNT, getValue: transformer });

export const animationIterationCount = createAnimationIterationCount();

export const animationIterationCountRule = createAnimationIterationCountRule();
