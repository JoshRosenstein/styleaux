import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingInlineStartProperty } from '@styleaux/csstype';

const SCROLLPADDINGINLINESTART = 'scrollPaddingInlineStart';

export interface ScrollPaddingInlineStartProps<
  T = ScrollPaddingInlineStartProperty
> {
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  [SCROLLPADDINGINLINESTART]: T;
}

export const createScrollPaddingInlineStart = <
  T = ScrollPaddingInlineStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingInlineStartProps<T>, Theme> = {},
) =>
  style<ScrollPaddingInlineStartProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGINLINESTART,
    prop: SCROLLPADDINGINLINESTART,
    ...config,
  });

export const createScrollPaddingInlineStartRule = <
  T = ScrollPaddingInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGINLINESTART, getValue: transformer });

export const scrollPaddingInlineStart = createScrollPaddingInlineStart();

export const scrollPaddingInlineStartRule = createScrollPaddingInlineStartRule();
