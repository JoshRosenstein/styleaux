import { GridProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRID='grid'

export interface IGridProps<T> {
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid: T;
}

export const createGrid = <
  T = GridProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridProps<T>, Theme, Breakpoints>({
    cssProp: GRID,
    prop: GRID,
    alias,
    key,
    transformValue,
  })

export const createGridRule = <T = GridProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRID, getValue: transformer})

export const grid =createGrid()

export const gridRule =createGridRule()
