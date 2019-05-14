import { ScrollMarginRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINRIGHT = 'scrollMarginRight';

export interface ScrollMarginRightProps<T = ScrollMarginRightProperty> {
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  [SCROLLMARGINRIGHT]: T;
}

export const createScrollMarginRight = <
  T = ScrollMarginRightProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ScrollMarginRightProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ScrollMarginRightProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINRIGHT,
    prop: SCROLLMARGINRIGHT,
    key,
    transform,
  });

export const createScrollMarginRightRule = <
  T = ScrollMarginRightProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINRIGHT, getValue: transformer });

export const scrollMarginRight = createScrollMarginRight();

export const scrollMarginRightRule = createScrollMarginRightRule();
