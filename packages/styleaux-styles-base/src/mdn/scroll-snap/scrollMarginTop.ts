import { ScrollMarginTopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINTOP='scrollMarginTop'

export interface IScrollMarginTopProps<T> {
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  scrollMarginTop: T;
}

export const createScrollMarginTop = <
  T = ScrollMarginTopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginTopProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINTOP,
    prop: SCROLLMARGINTOP,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginTopRule = <T = ScrollMarginTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINTOP, getValue: transformer})

export const scrollMarginTop =createScrollMarginTop()

export const scrollMarginTopRule =createScrollMarginTopRule()
