import { AnimationIterationCountProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONITERATIONCOUNT='animationIterationCount'

export interface AnimationIterationCountProps<T=AnimationIterationCountProperty> {
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  [ANIMATIONITERATIONCOUNT]: T;
}

export const createAnimationIterationCount = <
  T = AnimationIterationCountProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationIterationCountProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationIterationCountProps<T>,Theme,Media>({
    cssProp:ANIMATIONITERATIONCOUNT,
    prop:ANIMATIONITERATIONCOUNT,
    key,
    transformValue,
  })

export const createAnimationIterationCountRule = <T = AnimationIterationCountProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: ANIMATIONITERATIONCOUNT, getValue: transformer})

export const animationIterationCount =createAnimationIterationCount()

export const animationIterationCountRule =createAnimationIterationCountRule()
