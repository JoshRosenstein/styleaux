import { GapProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GAP='gap'

export interface IGapProps<T> {
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap: T;
}

export const gap = <
  T = GapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGapProps<T>, Theme, Breakpoints>({
    cssProp: GAP,
    prop: GAP,
    alias,
    key,
    transformValue,
  })

export const gapRule = <T = GapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GAP, getValue: transformer})
