import { OverflowXProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OVERFLOWX='overflowX'

export interface IOverflowXProps<T> {
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX: T;
}

export const createOverflowX = <
  T = OverflowXProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOverflowXProps<T>, Theme, Breakpoints>({
    cssProp: OVERFLOWX,
    prop: OVERFLOWX,
    alias,
    key,
    transformValue,
  })

export const createOverflowXRule = <T = OverflowXProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OVERFLOWX, getValue: transformer})

export const overflowX =createOverflowX()

export const overflowXRule =createOverflowXRule()
