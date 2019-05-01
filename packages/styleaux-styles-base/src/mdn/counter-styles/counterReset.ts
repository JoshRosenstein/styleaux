import { CounterResetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COUNTERRESET='counterReset'

export interface CounterResetProps<T=CounterResetProperty> {
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  [COUNTERRESET]: T;
}

export const createCounterReset = <
  T = CounterResetProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<CounterResetProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<CounterResetProps<T>,Theme,Media>({
    cssProp:COUNTERRESET,
    prop:COUNTERRESET,
    key,
    transformValue,
  })

export const createCounterResetRule = <T = CounterResetProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COUNTERRESET, getValue: transformer})

export const counterReset =createCounterReset()

export const counterResetRule =createCounterResetRule()
