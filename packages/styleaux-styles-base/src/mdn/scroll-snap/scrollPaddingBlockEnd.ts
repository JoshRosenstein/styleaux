import { ScrollPaddingBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLPADDINGBLOCKEND = 'scrollPaddingBlockEnd';

export interface ScrollPaddingBlockEndProps<T = ScrollPaddingBlockEndProperty> {
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  [SCROLLPADDINGBLOCKEND]: T;
}

export const createScrollPaddingBlockEnd = <
  T = ScrollPaddingBlockEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollPaddingBlockEndProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollPaddingBlockEndProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGBLOCKEND,
    prop: SCROLLPADDINGBLOCKEND,
    key,
    transform,
  });

export const createScrollPaddingBlockEndRule = <
  T = ScrollPaddingBlockEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGBLOCKEND, getValue: transformer });

export const scrollPaddingBlockEnd = createScrollPaddingBlockEnd();

export const scrollPaddingBlockEndRule = createScrollPaddingBlockEndRule();
