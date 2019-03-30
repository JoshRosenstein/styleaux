import { AnimationProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATION='animation'

export interface IAnimationProps<T> {
  /**
   * The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation: T;
}

export const animation = <
  T = AnimationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATION,
    prop: ANIMATION,
    alias,
    key,
    transformValue,
  })

export const animationRule = <T = AnimationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATION, getValue: transformer})
