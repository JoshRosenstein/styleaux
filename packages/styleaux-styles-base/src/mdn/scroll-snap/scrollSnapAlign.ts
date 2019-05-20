import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ScrollSnapAlignProperty } from '@styleaux/csstype';

const SCROLLSNAPALIGN = 'scrollSnapAlign';

export interface ScrollSnapAlignProps<T = ScrollSnapAlignProperty> {
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **69** |   No    | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  [SCROLLSNAPALIGN]: T;
}

export const createScrollSnapAlign = <
  T = ScrollSnapAlignProperty,
  Media = never,
  Theme = never
>(
  config: Config<ScrollSnapAlignProps<T>, Theme> = {},
) =>
  style<ScrollSnapAlignProps<T>, Theme, Media>({
    cssProp: SCROLLSNAPALIGN,
    prop: SCROLLSNAPALIGN,
    ...config,
  });

export const createScrollSnapAlignRule = <
  T = ScrollSnapAlignProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SCROLLSNAPALIGN, getValue: transformer });

export const scrollSnapAlign = createScrollSnapAlign();

export const scrollSnapAlignRule = createScrollSnapAlignRule();
