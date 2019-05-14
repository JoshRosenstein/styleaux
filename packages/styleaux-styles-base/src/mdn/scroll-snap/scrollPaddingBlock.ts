import { ScrollPaddingBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLPADDINGBLOCK = 'scrollPaddingBlock';

export interface ScrollPaddingBlockProps<T = ScrollPaddingBlockProperty> {
  /**
 * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.

The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 *
 * **Initial value**: `auto`
 *
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * | **69** |   No    |   No   |  No  | No  |
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
 */
  [SCROLLPADDINGBLOCK]: T;
}

export const createScrollPaddingBlock = <
  T = ScrollPaddingBlockProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollPaddingBlockProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollPaddingBlockProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGBLOCK,
    prop: SCROLLPADDINGBLOCK,
    key,
    transform,
  });

export const createScrollPaddingBlockRule = <
  T = ScrollPaddingBlockProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGBLOCK, getValue: transformer });

export const scrollPaddingBlock = createScrollPaddingBlock();

export const scrollPaddingBlockRule = createScrollPaddingBlockRule();
