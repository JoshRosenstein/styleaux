import { BreakBeforeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BREAKBEFORE='breakBefore'

export interface IBreakBeforeProps<T> {
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore: T;
}

export const breakBefore = <
  T = BreakBeforeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: BREAKBEFORE,
    prop: BREAKBEFORE,
    alias,
    key,
    transformValue,
  })

export const breakBeforeRule = <T = BreakBeforeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BREAKBEFORE, getValue: transformer})
