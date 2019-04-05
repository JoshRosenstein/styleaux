import { GridRowStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDROWSTART='gridRowStart'

export interface IGridRowStartProps<T> {
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart: T;
}

export const createGridRowStart = <
  T = GridRowStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridRowStartProps<T>, Theme, Breakpoints>({
    cssProp: GRIDROWSTART,
    prop: GRIDROWSTART,
    alias,
    key,
    transformValue,
  })

export const createGridRowStartRule = <T = GridRowStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDROWSTART, getValue: transformer})

export const gridRowStart =createGridRowStart()

export const gridRowStartRule =createGridRowStartRule()
