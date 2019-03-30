import { CounterResetProperty } from '@roseys/csstype';

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

export const counterReset = <
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

export const counterResetRule = <T = CounterResetProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COUNTERRESET, getValue: transformer})
