import { AlignItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ALIGNITEMS='alignItems'

export interface IAlignItemsProps<T> {
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems: T;
}

export const createAlignItems = <
  T = AlignItemsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAlignItemsProps<T>, Theme, Breakpoints>({
    cssProp: ALIGNITEMS,
    prop: ALIGNITEMS,
    alias,
    key,
    transformValue,
  })

export const createAlignItemsRule = <T = AlignItemsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ALIGNITEMS, getValue: transformer})

export const alignItems =createAlignItems()

export const alignItemsRule =createAlignItemsRule()
