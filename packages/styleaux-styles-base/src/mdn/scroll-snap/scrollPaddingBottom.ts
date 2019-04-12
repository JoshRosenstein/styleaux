import { ScrollPaddingBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLPADDINGBOTTOM='scrollPaddingBottom'

export interface ScrollPaddingBottomProps<T=ScrollPaddingBottomProperty> {
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  [SCROLLPADDINGBOTTOM]: T;
}

export const createScrollPaddingBottom = <
  T = ScrollPaddingBottomProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollPaddingBottomProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollPaddingBottomProps<T>,Theme,Media>({
    cssProp:SCROLLPADDINGBOTTOM,
    prop:SCROLLPADDINGBOTTOM,
    key,
    transformValue,
  })

export const createScrollPaddingBottomRule = <T = ScrollPaddingBottomProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SCROLLPADDINGBOTTOM, getValue: transformer})

export const scrollPaddingBottom =createScrollPaddingBottom()

export const scrollPaddingBottomRule =createScrollPaddingBottomRule()
