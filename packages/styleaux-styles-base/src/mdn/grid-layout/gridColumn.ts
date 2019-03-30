import { GridColumnProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDCOLUMN='gridColumn'

export interface IGridColumnProps<T> {
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn: T;
}

export const gridColumn = <
  T = GridColumnProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridColumnProps<T>, Theme, Breakpoints>({
    cssProp: GRIDCOLUMN,
    prop: GRIDCOLUMN,
    alias,
    key,
    transformValue,
  })

export const gridColumnRule = <T = GridColumnProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDCOLUMN, getValue: transformer})
