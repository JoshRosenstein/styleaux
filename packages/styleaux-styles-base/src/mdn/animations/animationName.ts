import { AnimationNameProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ANIMATIONNAME='animationName'

export interface AnimationNameProps<T=AnimationNameProperty> {
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  [ANIMATIONNAME]: T;
}

export const createAnimationName = <
  T = AnimationNameProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationNameProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationNameProps<T>,Theme,Media>({
    cssProp:ANIMATIONNAME,
    prop:ANIMATIONNAME,
    key,
    transformValue,
  })

export const createAnimationNameRule = <T = AnimationNameProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ANIMATIONNAME, getValue: transformer})

export const animationName =createAnimationName()

export const animationNameRule =createAnimationNameRule()
