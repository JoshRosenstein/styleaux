import { ScrollPaddingTopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLPADDINGTOP = 'scrollPaddingTop';

export interface ScrollPaddingTopProps<T = ScrollPaddingTopProperty> {
  /**
   * The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  [SCROLLPADDINGTOP]: T;
}

export const createScrollPaddingTop = <
  T = ScrollPaddingTopProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<ScrollPaddingTopProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<ScrollPaddingTopProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGTOP,
    prop: SCROLLPADDINGTOP,
    key,
    transformValue,
  });

export const createScrollPaddingTopRule = <
  T = ScrollPaddingTopProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGTOP, getValue: transformer });

export const scrollPaddingTop = createScrollPaddingTop();

export const scrollPaddingTopRule = createScrollPaddingTopRule();
