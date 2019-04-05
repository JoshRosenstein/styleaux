import { TransitionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSITION='transition'

export interface ITransitionProps<T> {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition: T;
}

export const createTransition = <
  T = TransitionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransitionProps<T>, Theme, Breakpoints>({
    cssProp: TRANSITION,
    prop: TRANSITION,
    alias,
    key,
    transformValue,
  })

export const createTransitionRule = <T = TransitionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSITION, getValue: transformer})

export const transition =createTransition()

export const transitionRule =createTransitionRule()
