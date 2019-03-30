import { ScrollPaddingBottomProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGBOTTOM='scrollPaddingBottom'

export interface IScrollPaddingBottomProps<T> {
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  scrollPaddingBottom: T;
}

export const scrollPaddingBottom = <
  T = ScrollPaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGBOTTOM,
    prop: SCROLLPADDINGBOTTOM,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingBottomRule = <T = ScrollPaddingBottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGBOTTOM, getValue: transformer})
