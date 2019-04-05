import { ListStylePositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LISTSTYLEPOSITION='listStylePosition'

export interface IListStylePositionProps<T> {
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition: T;
}

export const createListStylePosition = <
  T = ListStylePositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IListStylePositionProps<T>, Theme, Breakpoints>({
    cssProp: LISTSTYLEPOSITION,
    prop: LISTSTYLEPOSITION,
    alias,
    key,
    transformValue,
  })

export const createListStylePositionRule = <T = ListStylePositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LISTSTYLEPOSITION, getValue: transformer})

export const listStylePosition =createListStylePosition()

export const listStylePositionRule =createListStylePositionRule()
