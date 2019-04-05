import { OverflowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OVERFLOW='overflow'

export interface IOverflowProps<T> {
  /**
   * The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow: T;
}

export const createOverflow = <
  T = OverflowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOverflowProps<T>, Theme, Breakpoints>({
    cssProp: OVERFLOW,
    prop: OVERFLOW,
    alias,
    key,
    transformValue,
  })

export const createOverflowRule = <T = OverflowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OVERFLOW, getValue: transformer})

export const overflow =createOverflow()

export const overflowRule =createOverflowRule()
