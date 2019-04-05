import { ScrollPaddingBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLPADDINGBLOCKEND='scrollPaddingBlockEnd'

export interface IScrollPaddingBlockEndProps<T> {
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  scrollPaddingBlockEnd: T;
}

export const createScrollPaddingBlockEnd = <
  T = ScrollPaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollPaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLPADDINGBLOCKEND,
    prop: SCROLLPADDINGBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const createScrollPaddingBlockEndRule = <T = ScrollPaddingBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLPADDINGBLOCKEND, getValue: transformer})

export const scrollPaddingBlockEnd =createScrollPaddingBlockEnd()

export const scrollPaddingBlockEndRule =createScrollPaddingBlockEndRule()
