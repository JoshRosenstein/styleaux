import { TransitionDurationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSITIONDURATION='transitionDuration'

export interface ITransitionDurationProps<T> {
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration: T;
}

export const createTransitionDuration = <
  T = TransitionDurationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransitionDurationProps<T>, Theme, Breakpoints>({
    cssProp: TRANSITIONDURATION,
    prop: TRANSITIONDURATION,
    alias,
    key,
    transformValue,
  })

export const createTransitionDurationRule = <T = TransitionDurationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSITIONDURATION, getValue: transformer})

export const transitionDuration =createTransitionDuration()

export const transitionDurationRule =createTransitionDurationRule()
