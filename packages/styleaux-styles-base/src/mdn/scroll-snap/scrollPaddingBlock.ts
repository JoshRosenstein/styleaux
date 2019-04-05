import { ScrollPaddingBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGBLOCK='scrollPaddingBlock'

export interface IScrollPaddingBlockProps<T> {
  /**
   * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.  
  
The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  scrollPaddingBlock: T;
}

export const createScrollPaddingBlock = <
  T = ScrollPaddingBlockProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingBlockProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGBLOCK,
    prop: SCROLLPADDINGBLOCK,
    alias,
    key,
    transformValue,
  })

export const createScrollPaddingBlockRule = <T = ScrollPaddingBlockProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGBLOCK, getValue: transformer})

export const scrollPaddingBlock =createScrollPaddingBlock()

export const scrollPaddingBlockRule =createScrollPaddingBlockRule()
