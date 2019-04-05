import { CounterIncrementProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COUNTERINCREMENT='counterIncrement'

export interface ICounterIncrementProps<T> {
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement: T;
}

export const createCounterIncrement = <
  T = CounterIncrementProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ICounterIncrementProps<T>, Theme, Breakpoints>({
    cssProp: COUNTERINCREMENT,
    prop: COUNTERINCREMENT,
    alias,
    key,
    transformValue,
  })

export const createCounterIncrementRule = <T = CounterIncrementProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COUNTERINCREMENT, getValue: transformer})

export const counterIncrement =createCounterIncrement()

export const counterIncrementRule =createCounterIncrementRule()
