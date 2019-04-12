import { AnimationDurationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ANIMATIONDURATION='animationDuration'

export interface AnimationDurationProps<T=AnimationDurationProperty> {
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  [ANIMATIONDURATION]: T;
}

export const createAnimationDuration = <
  T = AnimationDurationProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationDurationProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationDurationProps<T>,Theme,Media>({
    cssProp:ANIMATIONDURATION,
    prop:ANIMATIONDURATION,
    key,
    transformValue,
  })

export const createAnimationDurationRule = <T = AnimationDurationProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ANIMATIONDURATION, getValue: transformer})

export const animationDuration =createAnimationDuration()

export const animationDurationRule =createAnimationDurationRule()
