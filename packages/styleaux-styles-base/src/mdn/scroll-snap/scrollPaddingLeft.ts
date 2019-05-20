import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollPaddingLeftProperty } from '@styleaux/csstype';

const SCROLLPADDINGLEFT = 'scrollPaddingLeft';

export interface ScrollPaddingLeftProps<T = ScrollPaddingLeftProperty> {
  /**
   * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  [SCROLLPADDINGLEFT]: T;
}

export const createScrollPaddingLeft = <
  T = ScrollPaddingLeftProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollPaddingLeftProps<T>, Theme> = {},
) =>
  style<ScrollPaddingLeftProps<T>, Theme, Media>({
    cssProp: SCROLLPADDINGLEFT,
    prop: SCROLLPADDINGLEFT,
    ...config,
  });

export const createScrollPaddingLeftRule = <
  T = ScrollPaddingLeftProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLPADDINGLEFT, getValue: transformer });

export const scrollPaddingLeft = createScrollPaddingLeft();

export const scrollPaddingLeftRule = createScrollPaddingLeftRule();
