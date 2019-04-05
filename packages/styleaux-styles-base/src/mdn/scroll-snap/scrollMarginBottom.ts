import { ScrollMarginBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINBOTTOM='scrollMarginBottom'

export interface IScrollMarginBottomProps<T> {
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  scrollMarginBottom: T;
}

export const createScrollMarginBottom = <
  T = ScrollMarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINBOTTOM,
    prop: SCROLLMARGINBOTTOM,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginBottomRule = <T = ScrollMarginBottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINBOTTOM, getValue: transformer})

export const scrollMarginBottom =createScrollMarginBottom()

export const scrollMarginBottomRule =createScrollMarginBottomRule()
