import { GridAreaProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDAREA='gridArea'

export interface IGridAreaProps<T> {
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea: T;
}

export const gridArea = <
  T = GridAreaProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridAreaProps<T>, Theme, Breakpoints>({
    cssProp: GRIDAREA,
    prop: GRIDAREA,
    alias,
    key,
    transformValue,
  })

export const gridAreaRule = <T = GridAreaProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDAREA, getValue: transformer})
