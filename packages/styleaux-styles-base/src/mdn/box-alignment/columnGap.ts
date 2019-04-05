import { ColumnGapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNGAP='columnGap'

export interface IColumnGapProps<T> {
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap: T;
}

export const createColumnGap = <
  T = ColumnGapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnGapProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNGAP,
    prop: COLUMNGAP,
    alias,
    key,
    transformValue,
  })

export const createColumnGapRule = <T = ColumnGapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNGAP, getValue: transformer})

export const columnGap =createColumnGap()

export const columnGapRule =createColumnGapRule()
