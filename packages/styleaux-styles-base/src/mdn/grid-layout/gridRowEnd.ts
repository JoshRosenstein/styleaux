import { GridRowEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDROWEND='gridRowEnd'

export interface IGridRowEndProps<T> {
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd: T;
}

export const createGridRowEnd = <
  T = GridRowEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridRowEndProps<T>, Theme, Breakpoints>({
    cssProp: GRIDROWEND,
    prop: GRIDROWEND,
    alias,
    key,
    transformValue,
  })

export const createGridRowEndRule = <T = GridRowEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDROWEND, getValue: transformer})

export const gridRowEnd =createGridRowEnd()

export const gridRowEndRule =createGridRowEndRule()
