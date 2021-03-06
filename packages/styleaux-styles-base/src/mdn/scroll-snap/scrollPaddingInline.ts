import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingInlineProperty } from '@styleaux/csstype';

const SCROLLPADDINGINLINE = 'scrollPaddingInline';

export interface ScrollPaddingInlineProps<T = ScrollPaddingInlineProperty> {
  /**
 * The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.  
  
The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 * 
 * **Initial value**: `auto`
 * 
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * | **69** |   No    |   No   |  No  | No  |
 * 
 * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
 */
  [SCROLLPADDINGINLINE]: T;
}

export const createScrollPaddingInline = <
  T = ScrollPaddingInlineProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingInlineProps<T>, Theme> = {},
) =>
  style<ScrollPaddingInlineProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGINLINE,
    prop: SCROLLPADDINGINLINE,
    ...config,
  });

export const createScrollPaddingInlineRule = <
  T = ScrollPaddingInlineProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGINLINE, getValue: transformer });

export const scrollPaddingInline = createScrollPaddingInline();

export const scrollPaddingInlineRule = createScrollPaddingInlineRule();
