import { CounterResetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COUNTERRESET='counterReset'

export interface ICounterResetProps<T> {
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset: T;
}

export const createCounterReset = <
  T = CounterResetProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ICounterResetProps<T>, Theme, Breakpoints>({
    cssProp: COUNTERRESET,
    prop: COUNTERRESET,
    alias,
    key,
    transformValue,
  })

export const createCounterResetRule = <T = CounterResetProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COUNTERRESET, getValue: transformer})

export const counterReset =createCounterReset()

export const counterResetRule =createCounterResetRule()
