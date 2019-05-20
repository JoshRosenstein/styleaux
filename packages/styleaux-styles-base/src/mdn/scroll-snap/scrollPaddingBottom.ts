import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingBottomProperty } from '@styleaux/csstype';

const SCROLLPADDINGBOTTOM = 'scrollPaddingBottom';

export interface ScrollPaddingBottomProps<T = ScrollPaddingBottomProperty> {
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  [SCROLLPADDINGBOTTOM]: T;
}

export const createScrollPaddingBottom = <
  T = ScrollPaddingBottomProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingBottomProps<T>, Theme> = {},
) =>
  style<ScrollPaddingBottomProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGBOTTOM,
    prop: SCROLLPADDINGBOTTOM,
    ...config,
  });

export const createScrollPaddingBottomRule = <
  T = ScrollPaddingBottomProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGBOTTOM, getValue: transformer });

export const scrollPaddingBottom = createScrollPaddingBottom();

export const scrollPaddingBottomRule = createScrollPaddingBottomRule();
