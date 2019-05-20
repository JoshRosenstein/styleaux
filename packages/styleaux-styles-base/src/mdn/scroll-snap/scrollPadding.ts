import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingProperty } from '@styleaux/csstype';

const SCROLLPADDING = 'scrollPadding';

export interface ScrollPaddingProps<T = ScrollPaddingProperty> {
  /**
 * The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\* longhands.  
  
The scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
 * 
 * **Initial value**: `auto`
 * 
 * | Chrome | Firefox | Safari | Edge | IE  |
 * | :----: | :-----: | :----: | :--: | :-: |
 * | **69** |   No    | **11** |  No  | No  |
 * 
 * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
 */
  [SCROLLPADDING]: T;
}

export const createScrollPadding = <
  T = ScrollPaddingProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingProps<T>, Theme> = {},
) =>
  style<ScrollPaddingProps<T>, Theme, Media>({
    cssProp: SCROLLPADDING,
    prop: SCROLLPADDING,
    ...config,
  });

export const createScrollPaddingRule = <T = ScrollPaddingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDING, getValue: transformer });

export const scrollPadding = createScrollPadding();

export const scrollPaddingRule = createScrollPaddingRule();
