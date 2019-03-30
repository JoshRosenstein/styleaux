import { ColumnsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNS='columns'

export interface IColumnsProps<T> {
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns: T;
}

export const columns = <
  T = ColumnsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnsProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNS,
    prop: COLUMNS,
    alias,
    key,
    transformValue,
  })

export const columnsRule = <T = ColumnsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNS, getValue: transformer})
