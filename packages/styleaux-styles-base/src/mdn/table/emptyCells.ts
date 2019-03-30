import { EmptyCellsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const EMPTYCELLS='emptyCells'

export interface IEmptyCellsProps<T> {
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells: T;
}

export const emptyCells = <
  T = EmptyCellsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IEmptyCellsProps<T>, Theme, Breakpoints>({
    cssProp: EMPTYCELLS,
    prop: EMPTYCELLS,
    alias,
    key,
    transformValue,
  })

export const emptyCellsRule = <T = EmptyCellsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: EMPTYCELLS, getValue: transformer})
