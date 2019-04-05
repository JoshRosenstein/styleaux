import { TransitionDelayProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSITIONDELAY='transitionDelay'

export interface ITransitionDelayProps<T> {
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay: T;
}

export const createTransitionDelay = <
  T = TransitionDelayProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransitionDelayProps<T>, Theme, Breakpoints>({
    cssProp: TRANSITIONDELAY,
    prop: TRANSITIONDELAY,
    alias,
    key,
    transformValue,
  })

export const createTransitionDelayRule = <T = TransitionDelayProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSITIONDELAY, getValue: transformer})

export const transitionDelay =createTransitionDelay()

export const transitionDelayRule =createTransitionDelayRule()
