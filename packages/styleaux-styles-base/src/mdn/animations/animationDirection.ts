import { AnimationDirectionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONDIRECTION='animationDirection'

export interface IAnimationDirectionProps<T> {
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection: T;
}

export const createAnimationDirection = <
  T = AnimationDirectionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationDirectionProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONDIRECTION,
    prop: ANIMATIONDIRECTION,
    alias,
    key,
    transformValue,
  })

export const createAnimationDirectionRule = <T = AnimationDirectionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONDIRECTION, getValue: transformer})

export const animationDirection =createAnimationDirection()

export const animationDirectionRule =createAnimationDirectionRule()
