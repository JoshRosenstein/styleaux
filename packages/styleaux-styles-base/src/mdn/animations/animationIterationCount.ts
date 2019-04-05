import { AnimationIterationCountProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONITERATIONCOUNT='animationIterationCount'

export interface IAnimationIterationCountProps<T> {
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount: T;
}

export const createAnimationIterationCount = <
  T = AnimationIterationCountProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationIterationCountProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONITERATIONCOUNT,
    prop: ANIMATIONITERATIONCOUNT,
    alias,
    key,
    transformValue,
  })

export const createAnimationIterationCountRule = <T = AnimationIterationCountProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONITERATIONCOUNT, getValue: transformer})

export const animationIterationCount =createAnimationIterationCount()

export const animationIterationCountRule =createAnimationIterationCountRule()
