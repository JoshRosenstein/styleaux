import { GridAutoRowsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDAUTOROWS='gridAutoRows'

export interface IGridAutoRowsProps<T> {
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows: T;
}

export const createGridAutoRows = <
  T = GridAutoRowsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridAutoRowsProps<T>, Theme, Breakpoints>({
    cssProp: GRIDAUTOROWS,
    prop: GRIDAUTOROWS,
    alias,
    key,
    transformValue,
  })

export const createGridAutoRowsRule = <T = GridAutoRowsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDAUTOROWS, getValue: transformer})

export const gridAutoRows =createGridAutoRows()

export const gridAutoRowsRule =createGridAutoRowsRule()
