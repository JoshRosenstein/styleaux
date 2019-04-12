import { ScrollPaddingBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCROLLPADDINGBLOCKSTART='scrollPaddingBlockStart'

export interface ScrollPaddingBlockStartProps<T=ScrollPaddingBlockStartProperty> {
  /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  [SCROLLPADDINGBLOCKSTART]: T;
}

export const createScrollPaddingBlockStart = <
  T = ScrollPaddingBlockStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollPaddingBlockStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollPaddingBlockStartProps<T>,Theme,Media>({
    cssProp:SCROLLPADDINGBLOCKSTART,
    prop:SCROLLPADDINGBLOCKSTART,
    key,
    transformValue,
  })

export const createScrollPaddingBlockStartRule = <T = ScrollPaddingBlockStartProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCROLLPADDINGBLOCKSTART, getValue: transformer})

export const scrollPaddingBlockStart =createScrollPaddingBlockStart()

export const scrollPaddingBlockStartRule =createScrollPaddingBlockStartRule()
