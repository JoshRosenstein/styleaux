import { JustifyItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const JUSTIFYITEMS='justifyItems'

export interface IJustifyItemsProps<T> {
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems: T;
}

export const createJustifyItems = <
  T = JustifyItemsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IJustifyItemsProps<T>, Theme, Breakpoints>({
    cssProp: JUSTIFYITEMS,
    prop: JUSTIFYITEMS,
    alias,
    key,
    transformValue,
  })

export const createJustifyItemsRule = <T = JustifyItemsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: JUSTIFYITEMS, getValue: transformer})

export const justifyItems =createJustifyItems()

export const justifyItemsRule =createJustifyItemsRule()
