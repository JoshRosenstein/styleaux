import { GridColumnStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDCOLUMNSTART='gridColumnStart'

export interface IGridColumnStartProps<T> {
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart: T;
}

export const createGridColumnStart = <
  T = GridColumnStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridColumnStartProps<T>, Theme, Breakpoints>({
    cssProp: GRIDCOLUMNSTART,
    prop: GRIDCOLUMNSTART,
    alias,
    key,
    transformValue,
  })

export const createGridColumnStartRule = <T = GridColumnStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDCOLUMNSTART, getValue: transformer})

export const gridColumnStart =createGridColumnStart()

export const gridColumnStartRule =createGridColumnStartRule()
