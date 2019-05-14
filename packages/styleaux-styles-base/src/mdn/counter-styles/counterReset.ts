import { CounterResetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COUNTERRESET = 'counterReset';

export interface CounterResetProps<T = CounterResetProperty> {
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  [COUNTERRESET]: T;
}

export const createCounterReset = <
  T = CounterResetProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<CounterResetProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<CounterResetProps<T>, Theme, Media>({
    cssProp: COUNTERRESET,
    prop: COUNTERRESET,
    key,
    transform,
  });

export const createCounterResetRule = <T = CounterResetProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COUNTERRESET, getValue: transformer });

export const counterReset = createCounterReset();

export const counterResetRule = createCounterResetRule();
