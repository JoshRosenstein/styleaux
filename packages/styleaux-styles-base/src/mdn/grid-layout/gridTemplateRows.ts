import { GridTemplateRowsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDTEMPLATEROWS='gridTemplateRows'

export interface IGridTemplateRowsProps<T> {
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows: T;
}

export const gridTemplateRows = <
  T = GridTemplateRowsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridTemplateRowsProps<T>, Theme, Breakpoints>({
    cssProp: GRIDTEMPLATEROWS,
    prop: GRIDTEMPLATEROWS,
    alias,
    key,
    transformValue,
  })

export const gridTemplateRowsRule = <T = GridTemplateRowsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDTEMPLATEROWS, getValue: transformer})
