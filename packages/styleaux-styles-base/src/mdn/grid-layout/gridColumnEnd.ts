import { GridColumnEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDCOLUMNEND='gridColumnEnd'

export interface IGridColumnEndProps<T> {
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd: T;
}

export const createGridColumnEnd = <
  T = GridColumnEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridColumnEndProps<T>, Theme, Breakpoints>({
    cssProp: GRIDCOLUMNEND,
    prop: GRIDCOLUMNEND,
    alias,
    key,
    transformValue,
  })

export const createGridColumnEndRule = <T = GridColumnEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDCOLUMNEND, getValue: transformer})

export const gridColumnEnd =createGridColumnEnd()

export const gridColumnEndRule =createGridColumnEndRule()
