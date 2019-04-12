import { AnimationTimingFunctionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ANIMATIONTIMINGFUNCTION='animationTimingFunction'

export interface AnimationTimingFunctionProps<T=AnimationTimingFunctionProperty> {
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  [ANIMATIONTIMINGFUNCTION]: T;
}

export const createAnimationTimingFunction = <
  T = AnimationTimingFunctionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationTimingFunctionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationTimingFunctionProps<T>,Theme,Media>({
    cssProp:ANIMATIONTIMINGFUNCTION,
    prop:ANIMATIONTIMINGFUNCTION,
    key,
    transformValue,
  })

export const createAnimationTimingFunctionRule = <T = AnimationTimingFunctionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ANIMATIONTIMINGFUNCTION, getValue: transformer})

export const animationTimingFunction =createAnimationTimingFunction()

export const animationTimingFunctionRule =createAnimationTimingFunctionRule()
