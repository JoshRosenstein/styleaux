import { ColumnFillProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNFILL='columnFill'

export interface IColumnFillProps<T> {
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill: T;
}

export const createColumnFill = <
  T = ColumnFillProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnFillProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNFILL,
    prop: COLUMNFILL,
    alias,
    key,
    transformValue,
  })

export const createColumnFillRule = <T = ColumnFillProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNFILL, getValue: transformer})

export const columnFill =createColumnFill()

export const columnFillRule =createColumnFillRule()
