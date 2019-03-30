import { ScrollPaddingLeftProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGLEFT='scrollPaddingLeft'

export interface IScrollPaddingLeftProps<T> {
  /**
   * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  scrollPaddingLeft: T;
}

export const scrollPaddingLeft = <
  T = ScrollPaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGLEFT,
    prop: SCROLLPADDINGLEFT,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingLeftRule = <T = ScrollPaddingLeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGLEFT, getValue: transformer})
