import { GridAutoColumnsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDAUTOCOLUMNS='gridAutoColumns'

export interface IGridAutoColumnsProps<T> {
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns: T;
}

export const gridAutoColumns = <
  T = GridAutoColumnsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridAutoColumnsProps<T>, Theme, Breakpoints>({
    cssProp: GRIDAUTOCOLUMNS,
    prop: GRIDAUTOCOLUMNS,
    alias,
    key,
    transformValue,
  })

export const gridAutoColumnsRule = <T = GridAutoColumnsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDAUTOCOLUMNS, getValue: transformer})
