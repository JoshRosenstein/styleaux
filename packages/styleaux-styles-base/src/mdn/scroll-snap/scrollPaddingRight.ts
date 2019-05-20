import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingRightProperty } from '@styleaux/csstype';

const SCROLLPADDINGRIGHT = 'scrollPaddingRight';

export interface ScrollPaddingRightProps<T = ScrollPaddingRightProperty> {
  /**
   * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  [SCROLLPADDINGRIGHT]: T;
}

export const createScrollPaddingRight = <
  T = ScrollPaddingRightProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingRightProps<T>, Theme> = {},
) =>
  style<ScrollPaddingRightProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGRIGHT,
    prop: SCROLLPADDINGRIGHT,
    ...config,
  });

export const createScrollPaddingRightRule = <
  T = ScrollPaddingRightProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGRIGHT, getValue: transformer });

export const scrollPaddingRight = createScrollPaddingRight();

export const scrollPaddingRightRule = createScrollPaddingRightRule();
