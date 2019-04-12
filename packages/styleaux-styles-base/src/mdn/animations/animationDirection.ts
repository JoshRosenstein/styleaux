import { AnimationDirectionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ANIMATIONDIRECTION='animationDirection'

export interface AnimationDirectionProps<T=AnimationDirectionProperty> {
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  [ANIMATIONDIRECTION]: T;
}

export const createAnimationDirection = <
  T = AnimationDirectionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationDirectionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationDirectionProps<T>,Theme,Media>({
    cssProp:ANIMATIONDIRECTION,
    prop:ANIMATIONDIRECTION,
    key,
    transformValue,
  })

export const createAnimationDirectionRule = <T = AnimationDirectionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ANIMATIONDIRECTION, getValue: transformer})

export const animationDirection =createAnimationDirection()

export const animationDirectionRule =createAnimationDirectionRule()
