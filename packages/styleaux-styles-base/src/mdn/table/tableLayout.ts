import { TableLayoutProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TABLELAYOUT='tableLayout'

export interface ITableLayoutProps<T> {
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout: T;
}

export const tableLayout = <
  T = TableLayoutProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITableLayoutProps<T>, Theme, Breakpoints>({
    cssProp: TABLELAYOUT,
    prop: TABLELAYOUT,
    alias,
    key,
    transformValue,
  })

export const tableLayoutRule = <T = TableLayoutProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TABLELAYOUT, getValue: transformer})
