import { ScrollMarginInlineEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGININLINEEND='scrollMarginInlineEnd'

export interface IScrollMarginInlineEndProps<T> {
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  scrollMarginInlineEnd: T;
}

export const scrollMarginInlineEnd = <
  T = ScrollMarginInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGININLINEEND,
    prop: SCROLLMARGININLINEEND,
    alias,
    key,
    transformValue,
  })

export const scrollMarginInlineEndRule = <T = ScrollMarginInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGININLINEEND, getValue: transformer})
