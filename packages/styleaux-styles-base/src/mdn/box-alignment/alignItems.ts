import { AlignItemsProperty } from '@roseys/csstype';

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

export const alignItems = <
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

export const alignItemsRule = <T = AlignItemsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ALIGNITEMS, getValue: transformer})
