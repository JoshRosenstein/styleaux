import { GridTemplateColumnsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDTEMPLATECOLUMNS='gridTemplateColumns'

export interface GridTemplateColumnsProps<T=GridTemplateColumnsProperty> {
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  [GRIDTEMPLATECOLUMNS]: T;
}

export const createGridTemplateColumns = <
  T = GridTemplateColumnsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridTemplateColumnsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridTemplateColumnsProps<T>,Theme,Media>({
    cssProp:GRIDTEMPLATECOLUMNS,
    prop:GRIDTEMPLATECOLUMNS,
    key,
    transformValue,
  })

export const createGridTemplateColumnsRule = <T = GridTemplateColumnsProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: GRIDTEMPLATECOLUMNS, getValue: transformer})

export const gridTemplateColumns =createGridTemplateColumns()

export const gridTemplateColumnsRule =createGridTemplateColumnsRule()
