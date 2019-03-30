import { GridAutoFlowProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDAUTOFLOW='gridAutoFlow'

export interface IGridAutoFlowProps<T> {
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow: T;
}

export const gridAutoFlow = <
  T = GridAutoFlowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridAutoFlowProps<T>, Theme, Breakpoints>({
    cssProp: GRIDAUTOFLOW,
    prop: GRIDAUTOFLOW,
    alias,
    key,
    transformValue,
  })

export const gridAutoFlowRule = <T = GridAutoFlowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDAUTOFLOW, getValue: transformer})