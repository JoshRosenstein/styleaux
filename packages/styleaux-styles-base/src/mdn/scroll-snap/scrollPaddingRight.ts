import { ScrollPaddingRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGRIGHT='scrollPaddingRight'

export interface IScrollPaddingRightProps<T> {
  /**
   * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  scrollPaddingRight: T;
}

export const createScrollPaddingRight = <
  T = ScrollPaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGRIGHT,
    prop: SCROLLPADDINGRIGHT,
    alias,
    key,
    transformValue,
  })

export const createScrollPaddingRightRule = <T = ScrollPaddingRightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGRIGHT, getValue: transformer})

export const scrollPaddingRight =createScrollPaddingRight()

export const scrollPaddingRightRule =createScrollPaddingRightRule()
