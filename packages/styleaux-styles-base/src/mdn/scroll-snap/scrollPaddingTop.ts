import { ScrollPaddingTopProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGTOP='scrollPaddingTop'

export interface IScrollPaddingTopProps<T> {
  /**
   * The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  scrollPaddingTop: T;
}

export const scrollPaddingTop = <
  T = ScrollPaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGTOP,
    prop: SCROLLPADDINGTOP,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingTopRule = <T = ScrollPaddingTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGTOP, getValue: transformer})
