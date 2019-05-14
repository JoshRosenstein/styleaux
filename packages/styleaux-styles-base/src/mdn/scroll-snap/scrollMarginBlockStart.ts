import { ScrollMarginBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINBLOCKSTART = 'scrollMarginBlockStart';

export interface ScrollMarginBlockStartProps<
  T = ScrollMarginBlockStartProperty
> {
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  [SCROLLMARGINBLOCKSTART]: T;
}

export const createScrollMarginBlockStart = <
  T = ScrollMarginBlockStartProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ScrollMarginBlockStartProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ScrollMarginBlockStartProps<T>, Theme, Media>({
    cssProp: SCROLLMARGINBLOCKSTART,
    prop: SCROLLMARGINBLOCKSTART,
    key,
    transform,
  });

export const createScrollMarginBlockStartRule = <
  T = ScrollMarginBlockStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLMARGINBLOCKSTART, getValue: transformer });

export const scrollMarginBlockStart = createScrollMarginBlockStart();

export const scrollMarginBlockStartRule = createScrollMarginBlockStartRule();
