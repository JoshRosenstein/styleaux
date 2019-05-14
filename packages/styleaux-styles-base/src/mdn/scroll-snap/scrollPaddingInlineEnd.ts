import { ScrollPaddingInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLPADDINGINLINEEND = 'scrollPaddingInlineEnd';

export interface ScrollPaddingInlineEndProps<
  T = ScrollPaddingInlineEndProperty
> {
  /**
   * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
   */
  [SCROLLPADDINGINLINEEND]: T;
}

export const createScrollPaddingInlineEnd = <
  T = ScrollPaddingInlineEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollPaddingInlineEndProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollPaddingInlineEndProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGINLINEEND,
    prop: SCROLLPADDINGINLINEEND,
    key,
    transform,
  });

export const createScrollPaddingInlineEndRule = <
  T = ScrollPaddingInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGINLINEEND, getValue: transformer });

export const scrollPaddingInlineEnd = createScrollPaddingInlineEnd();

export const scrollPaddingInlineEndRule = createScrollPaddingInlineEndRule();
