import { AnimationDurationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONDURATION='animationDuration'

export interface IAnimationDurationProps<T> {
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration: T;
}

export const createAnimationDuration = <
  T = AnimationDurationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationDurationProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONDURATION,
    prop: ANIMATIONDURATION,
    alias,
    key,
    transformValue,
  })

export const createAnimationDurationRule = <T = AnimationDurationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONDURATION, getValue: transformer})

export const animationDuration =createAnimationDuration()

export const animationDurationRule =createAnimationDurationRule()
