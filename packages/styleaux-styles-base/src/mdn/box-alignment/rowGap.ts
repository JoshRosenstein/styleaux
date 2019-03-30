import { RowGapProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ROWGAP='rowGap'

export interface IRowGapProps<T> {
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap: T;
}

export const rowGap = <
  T = RowGapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IRowGapProps<T>, Theme, Breakpoints>({
    cssProp: ROWGAP,
    prop: ROWGAP,
    alias,
    key,
    transformValue,
  })

export const rowGapRule = <T = RowGapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ROWGAP, getValue: transformer})
