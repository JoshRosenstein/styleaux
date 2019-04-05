import { AnimationDelayProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONDELAY='animationDelay'

export interface IAnimationDelayProps<T> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay: T;
}

export const createAnimationDelay = <
  T = AnimationDelayProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationDelayProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONDELAY,
    prop: ANIMATIONDELAY,
    alias,
    key,
    transformValue,
  })

export const createAnimationDelayRule = <T = AnimationDelayProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONDELAY, getValue: transformer})

export const animationDelay =createAnimationDelay()

export const animationDelayRule =createAnimationDelayRule()
