import { AnimationDirectionProperty } from '@roseys/csstype';

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

export const animationDirection = <
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

export const animationDirectionRule = <T = AnimationDirectionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONDIRECTION, getValue: transformer})
