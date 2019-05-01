import { CounterIncrementProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COUNTERINCREMENT='counterIncrement'

export interface CounterIncrementProps<T=CounterIncrementProperty> {
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  [COUNTERINCREMENT]: T;
}

export const createCounterIncrement = <
  T = CounterIncrementProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<CounterIncrementProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<CounterIncrementProps<T>,Theme,Media>({
    cssProp:COUNTERINCREMENT,
    prop:COUNTERINCREMENT,
    key,
    transformValue,
  })

export const createCounterIncrementRule = <T = CounterIncrementProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COUNTERINCREMENT, getValue: transformer})

export const counterIncrement =createCounterIncrement()

export const counterIncrementRule =createCounterIncrementRule()
