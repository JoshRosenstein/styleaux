import { BreakAfterProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BREAKAFTER='breakAfter'

export interface IBreakAfterProps<T> {
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter: T;
}

export const breakAfter = <
  T = BreakAfterProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: BREAKAFTER,
    prop: BREAKAFTER,
    alias,
    key,
    transformValue,
  })

export const breakAfterRule = <T = BreakAfterProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BREAKAFTER, getValue: transformer})
