import { ColumnWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNWIDTH='columnWidth'

export interface IColumnWidthProps<T> {
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth: T;
}

export const columnWidth = <
  T = ColumnWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnWidthProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNWIDTH,
    prop: COLUMNWIDTH,
    alias,
    key,
    transformValue,
  })

export const columnWidthRule = <T = ColumnWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNWIDTH, getValue: transformer})
