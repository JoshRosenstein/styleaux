import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollMarginLeftProperty } from '@styleaux/csstype';

const SCROLLMARGINLEFT = 'scrollMarginLeft';

export interface ScrollMarginLeftProps<T = ScrollMarginLeftProperty> {
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  [SCROLLMARGINLEFT]: T;
}

export const createScrollMarginLeft = <
  T = ScrollMarginLeftProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollMarginLeftProps<T>, Theme> = {},
) =>
  style<ScrollMarginLeftProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINLEFT,
    prop: SCROLLMARGINLEFT,
    ...config,
  });

export const createScrollMarginLeftRule = <
  T = ScrollMarginLeftProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINLEFT, getValue: transformer });

export const scrollMarginLeft = createScrollMarginLeft();

export const scrollMarginLeftRule = createScrollMarginLeftRule();
