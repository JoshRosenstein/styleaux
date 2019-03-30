import { ScrollMarginBlockStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINBLOCKSTART='scrollMarginBlockStart'

export interface IScrollMarginBlockStartProps<T> {
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  scrollMarginBlockStart: T;
}

export const scrollMarginBlockStart = <
  T = ScrollMarginBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINBLOCKSTART,
    prop: SCROLLMARGINBLOCKSTART,
    alias,
    key,
    transformValue,
  })

export const scrollMarginBlockStartRule = <T = ScrollMarginBlockStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINBLOCKSTART, getValue: transformer})
