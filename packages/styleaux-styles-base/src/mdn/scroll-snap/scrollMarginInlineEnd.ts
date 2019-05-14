import { ScrollMarginInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGININLINEEND = 'scrollMarginInlineEnd';

export interface ScrollMarginInlineEndProps<T = ScrollMarginInlineEndProperty> {
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  [SCROLLMARGININLINEEND]: T;
}

export const createScrollMarginInlineEnd = <
  T = ScrollMarginInlineEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollMarginInlineEndProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollMarginInlineEndProps<T>, Theme, Media>({
    cssProp: SCROLLMARGININLINEEND,
    prop: SCROLLMARGININLINEEND,
    key,
    transform,
  });

export const createScrollMarginInlineEndRule = <
  T = ScrollMarginInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGININLINEEND, getValue: transformer });

export const scrollMarginInlineEnd = createScrollMarginInlineEnd();

export const scrollMarginInlineEndRule = createScrollMarginInlineEndRule();
