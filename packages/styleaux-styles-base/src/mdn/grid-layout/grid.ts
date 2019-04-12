import { GridProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRID='grid'

export interface GridProps<T=GridProperty> {
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  [GRID]: T;
}

export const createGrid = <
  T = GridProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridProps<T>,Theme,Media>({
    cssProp:GRID,
    prop:GRID,
    key,
    transformValue,
  })

export const createGridRule = <T = GridProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: GRID, getValue: transformer})

export const grid =createGrid()

export const gridRule =createGridRule()
