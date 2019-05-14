import { ScrollMarginBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINBOTTOM = 'scrollMarginBottom';

export interface ScrollMarginBottomProps<T = ScrollMarginBottomProperty> {
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  [SCROLLMARGINBOTTOM]: T;
}

export const createScrollMarginBottom = <
  T = ScrollMarginBottomProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollMarginBottomProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollMarginBottomProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINBOTTOM,
    prop: SCROLLMARGINBOTTOM,
    key,
    transform,
  });

export const createScrollMarginBottomRule = <
  T = ScrollMarginBottomProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINBOTTOM, getValue: transformer });

export const scrollMarginBottom = createScrollMarginBottom();

export const scrollMarginBottomRule = createScrollMarginBottomRule();
