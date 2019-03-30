import { AnimationPlayStateProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONPLAYSTATE='animationPlayState'

export interface IAnimationPlayStateProps<T> {
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState: T;
}

export const animationPlayState = <
  T = AnimationPlayStateProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationPlayStateProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONPLAYSTATE,
    prop: ANIMATIONPLAYSTATE,
    alias,
    key,
    transformValue,
  })

export const animationPlayStateRule = <T = AnimationPlayStateProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONPLAYSTATE, getValue: transformer})
