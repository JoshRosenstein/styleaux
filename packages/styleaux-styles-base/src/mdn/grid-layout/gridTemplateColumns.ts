import { GridTemplateColumnsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDTEMPLATECOLUMNS='gridTemplateColumns'

export interface IGridTemplateColumnsProps<T> {
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns: T;
}

export const gridTemplateColumns = <
  T = GridTemplateColumnsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridTemplateColumnsProps<T>, Theme, Breakpoints>({
    cssProp: GRIDTEMPLATECOLUMNS,
    prop: GRIDTEMPLATECOLUMNS,
    alias,
    key,
    transformValue,
  })

export const gridTemplateColumnsRule = <T = GridTemplateColumnsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDTEMPLATECOLUMNS, getValue: transformer})
