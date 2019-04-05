import { FilterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FILTER='filter'

export interface IFilterProps<T> {
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter: T;
}

export const createFilter = <
  T = FilterProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFilterProps<T>, Theme, Breakpoints>({
    cssProp: FILTER,
    prop: FILTER,
    alias,
    key,
    transformValue,
  })

export const createFilterRule = <T = FilterProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FILTER, getValue: transformer})

export const filter =createFilter()

export const filterRule =createFilterRule()
