import { ScrollMarginRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINRIGHT='scrollMarginRight'

export interface IScrollMarginRightProps<T> {
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  scrollMarginRight: T;
}

export const createScrollMarginRight = <
  T = ScrollMarginRightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginRightProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINRIGHT,
    prop: SCROLLMARGINRIGHT,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginRightRule = <T = ScrollMarginRightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINRIGHT, getValue: transformer})

export const scrollMarginRight =createScrollMarginRight()

export const scrollMarginRightRule =createScrollMarginRightRule()
