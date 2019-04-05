import { OverflowYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OVERFLOWY='overflowY'

export interface IOverflowYProps<T> {
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY: T;
}

export const createOverflowY = <
  T = OverflowYProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOverflowYProps<T>, Theme, Breakpoints>({
    cssProp: OVERFLOWY,
    prop: OVERFLOWY,
    alias,
    key,
    transformValue,
  })

export const createOverflowYRule = <T = OverflowYProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OVERFLOWY, getValue: transformer})

export const overflowY =createOverflowY()

export const overflowYRule =createOverflowYRule()
