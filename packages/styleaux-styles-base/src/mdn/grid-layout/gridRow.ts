import { GridRowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDROW='gridRow'

export interface IGridRowProps<T> {
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow: T;
}

export const createGridRow = <
  T = GridRowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridRowProps<T>, Theme, Breakpoints>({
    cssProp: GRIDROW,
    prop: GRIDROW,
    alias,
    key,
    transformValue,
  })

export const createGridRowRule = <T = GridRowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDROW, getValue: transformer})

export const gridRow =createGridRow()

export const gridRowRule =createGridRowRule()
