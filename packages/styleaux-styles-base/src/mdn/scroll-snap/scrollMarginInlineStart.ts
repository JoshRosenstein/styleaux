import { ScrollMarginInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGININLINESTART='scrollMarginInlineStart'

export interface IScrollMarginInlineStartProps<T> {
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  scrollMarginInlineStart: T;
}

export const createScrollMarginInlineStart = <
  T = ScrollMarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGININLINESTART,
    prop: SCROLLMARGININLINESTART,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginInlineStartRule = <T = ScrollMarginInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGININLINESTART, getValue: transformer})

export const scrollMarginInlineStart =createScrollMarginInlineStart()

export const scrollMarginInlineStartRule =createScrollMarginInlineStartRule()
