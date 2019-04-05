import { ColumnCountProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNCOUNT='columnCount'

export interface IColumnCountProps<T> {
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount: T;
}

export const createColumnCount = <
  T = ColumnCountProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnCountProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNCOUNT,
    prop: COLUMNCOUNT,
    alias,
    key,
    transformValue,
  })

export const createColumnCountRule = <T = ColumnCountProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNCOUNT, getValue: transformer})

export const columnCount =createColumnCount()

export const columnCountRule =createColumnCountRule()
