import { ScrollPaddingInlineStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGINLINESTART='scrollPaddingInlineStart'

export interface IScrollPaddingInlineStartProps<T> {
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  scrollPaddingInlineStart: T;
}

export const scrollPaddingInlineStart = <
  T = ScrollPaddingInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGINLINESTART,
    prop: SCROLLPADDINGINLINESTART,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingInlineStartRule = <T = ScrollPaddingInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGINLINESTART, getValue: transformer})
