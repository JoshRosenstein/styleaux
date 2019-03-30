import { AnimationTimingFunctionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONTIMINGFUNCTION='animationTimingFunction'

export interface IAnimationTimingFunctionProps<T> {
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction: T;
}

export const animationTimingFunction = <
  T = AnimationTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONTIMINGFUNCTION,
    prop: ANIMATIONTIMINGFUNCTION,
    alias,
    key,
    transformValue,
  })

export const animationTimingFunctionRule = <T = AnimationTimingFunctionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONTIMINGFUNCTION, getValue: transformer})
