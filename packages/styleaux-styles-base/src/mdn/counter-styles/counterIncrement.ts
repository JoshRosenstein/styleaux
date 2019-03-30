import { CounterIncrementProperty } from '@roseys/csstype';

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

export const counterIncrement = <
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

export const counterIncrementRule = <T = CounterIncrementProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COUNTERINCREMENT, getValue: transformer})
