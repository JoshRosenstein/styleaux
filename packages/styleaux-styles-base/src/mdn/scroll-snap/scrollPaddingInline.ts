import { ScrollPaddingInlineProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGINLINE='scrollPaddingInline'

export interface IScrollPaddingInlineProps<T> {
  /**
   * The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.  
  
The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  scrollPaddingInline: T;
}

export const scrollPaddingInline = <
  T = ScrollPaddingInlineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingInlineProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGINLINE,
    prop: SCROLLPADDINGINLINE,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingInlineRule = <T = ScrollPaddingInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGINLINE, getValue: transformer})
