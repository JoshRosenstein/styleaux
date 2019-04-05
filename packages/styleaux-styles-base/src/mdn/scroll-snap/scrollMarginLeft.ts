import { ScrollMarginLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINLEFT='scrollMarginLeft'

export interface IScrollMarginLeftProps<T> {
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  scrollMarginLeft: T;
}

export const createScrollMarginLeft = <
  T = ScrollMarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINLEFT,
    prop: SCROLLMARGINLEFT,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginLeftRule = <T = ScrollMarginLeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINLEFT, getValue: transformer})

export const scrollMarginLeft =createScrollMarginLeft()

export const scrollMarginLeftRule =createScrollMarginLeftRule()
