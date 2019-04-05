import { TransitionTimingFunctionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSITIONTIMINGFUNCTION='transitionTimingFunction'

export interface ITransitionTimingFunctionProps<T> {
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction: T;
}

export const createTransitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransitionTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: TRANSITIONTIMINGFUNCTION,
    prop: TRANSITIONTIMINGFUNCTION,
    alias,
    key,
    transformValue,
  })

export const createTransitionTimingFunctionRule = <T = TransitionTimingFunctionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSITIONTIMINGFUNCTION, getValue: transformer})

export const transitionTimingFunction =createTransitionTimingFunction()

export const transitionTimingFunctionRule =createTransitionTimingFunctionRule()
