import { WidowsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WIDOWS='widows'

export interface IWidowsProps<T> {
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows: T;
}

export const createWidows = <
  T = WidowsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWidowsProps<T>, Theme, Breakpoints>({
    cssProp: WIDOWS,
    prop: WIDOWS,
    alias,
    key,
    transformValue,
  })

export const createWidowsRule = <T = WidowsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WIDOWS, getValue: transformer})

export const widows =createWidows()

export const widowsRule =createWidowsRule()
