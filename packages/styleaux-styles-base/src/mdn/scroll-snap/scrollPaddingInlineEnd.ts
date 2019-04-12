import { ScrollPaddingInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCROLLPADDINGINLINEEND='scrollPaddingInlineEnd'

export interface ScrollPaddingInlineEndProps<T=ScrollPaddingInlineEndProperty> {
  /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  [SCROLLPADDINGINLINEEND]: T;
}

export const createScrollPaddingInlineEnd = <
  T = ScrollPaddingInlineEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollPaddingInlineEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollPaddingInlineEndProps<T>,Theme,Media>({
    cssProp:SCROLLPADDINGINLINEEND,
    prop:SCROLLPADDINGINLINEEND,
    key,
    transformValue,
  })

export const createScrollPaddingInlineEndRule = <T = ScrollPaddingInlineEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCROLLPADDINGINLINEEND, getValue: transformer})

export const scrollPaddingInlineEnd =createScrollPaddingInlineEnd()

export const scrollPaddingInlineEndRule =createScrollPaddingInlineEndRule()
