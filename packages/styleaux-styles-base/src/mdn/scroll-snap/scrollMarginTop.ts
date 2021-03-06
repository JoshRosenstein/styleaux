import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollMarginTopProperty } from '@styleaux/csstype';

const SCROLLMARGINTOP = 'scrollMarginTop';

export interface ScrollMarginTopProps<T = ScrollMarginTopProperty> {
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  [SCROLLMARGINTOP]: T;
}

export const createScrollMarginTop = <
  T = ScrollMarginTopProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollMarginTopProps<T>, Theme> = {},
) =>
  style<ScrollMarginTopProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINTOP,
    prop: SCROLLMARGINTOP,
    ...config,
  });

export const createScrollMarginTopRule = <
  T = ScrollMarginTopProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINTOP, getValue: transformer });

export const scrollMarginTop = createScrollMarginTop();

export const scrollMarginTopRule = createScrollMarginTopRule();
