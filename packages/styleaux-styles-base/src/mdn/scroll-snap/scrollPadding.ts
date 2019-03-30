import { ScrollPaddingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDING='scrollPadding'

export interface IScrollPaddingProps<T> {
  /**
   * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\* longhands.  
  
The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
   */
  scrollPadding: T;
}

export const scrollPadding = <
  T = ScrollPaddingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDING,
    prop: SCROLLPADDING,
    alias,
    key,
    transformValue,
  })

export const scrollPaddingRule = <T = ScrollPaddingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDING, getValue: transformer})
