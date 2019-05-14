import { ScrollMarginInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGININLINESTART = 'scrollMarginInlineStart';

export interface ScrollMarginInlineStartProps<
  T = ScrollMarginInlineStartProperty
> {
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  [SCROLLMARGININLINESTART]: T;
}

export const createScrollMarginInlineStart = <
  T = ScrollMarginInlineStartProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollMarginInlineStartProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollMarginInlineStartProps<T>, Theme, Media>({
    cssProp: SCROLLMARGININLINESTART,
    prop: SCROLLMARGININLINESTART,
    key,
    transform,
  });

export const createScrollMarginInlineStartRule = <
  T = ScrollMarginInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGININLINESTART, getValue: transformer });

export const scrollMarginInlineStart = createScrollMarginInlineStart();

export const scrollMarginInlineStartRule = createScrollMarginInlineStartRule();
