import { FlexGrowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXGROW='flexGrow'

export interface IFlexGrowProps<T> {
  /**
   * The **`flex-grow`** CSS property sets how much of the remaining space in the flex container should be assigned to that item (the flex grow factor). The remaining space is the size of the flex container minus the size of all flex items together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow: T;
}

export const createFlexGrow = <
  T = FlexGrowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexGrowProps<T>, Theme, Breakpoints>({
    cssProp: FLEXGROW,
    prop: FLEXGROW,
    alias,
    key,
    transformValue,
  })

export const createFlexGrowRule = <T = FlexGrowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXGROW, getValue: transformer})

export const flexGrow =createFlexGrow()

export const flexGrowRule =createFlexGrowRule()
