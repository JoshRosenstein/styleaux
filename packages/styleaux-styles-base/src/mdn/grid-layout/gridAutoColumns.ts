import { GridAutoColumnsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDAUTOCOLUMNS='gridAutoColumns'

export interface GridAutoColumnsProps<T=GridAutoColumnsProperty> {
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  [GRIDAUTOCOLUMNS]: T;
}

export const createGridAutoColumns = <
  T = GridAutoColumnsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridAutoColumnsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridAutoColumnsProps<T>,Theme,Media>({
    cssProp:GRIDAUTOCOLUMNS,
    prop:GRIDAUTOCOLUMNS,
    key,
    transformValue,
  })

export const createGridAutoColumnsRule = <T = GridAutoColumnsProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: GRIDAUTOCOLUMNS, getValue: transformer})

export const gridAutoColumns =createGridAutoColumns()

export const gridAutoColumnsRule =createGridAutoColumnsRule()
