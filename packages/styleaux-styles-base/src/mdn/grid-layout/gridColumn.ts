import { GridColumnProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GRIDCOLUMN='gridColumn'

export interface GridColumnProps<T=GridColumnProperty> {
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  [GRIDCOLUMN]: T;
}

export const createGridColumn = <
  T = GridColumnProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridColumnProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridColumnProps<T>,Theme,Media>({
    cssProp:GRIDCOLUMN,
    prop:GRIDCOLUMN,
    key,
    transformValue,
  })

export const createGridColumnRule = <T = GridColumnProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GRIDCOLUMN, getValue: transformer})

export const gridColumn =createGridColumn()

export const gridColumnRule =createGridColumnRule()
