import { ColumnSpanProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNSPAN='columnSpan'

export interface IColumnSpanProps<T> {
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan: T;
}

export const columnSpan = <
  T = ColumnSpanProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnSpanProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNSPAN,
    prop: COLUMNSPAN,
    alias,
    key,
    transformValue,
  })

export const columnSpanRule = <T = ColumnSpanProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNSPAN, getValue: transformer})