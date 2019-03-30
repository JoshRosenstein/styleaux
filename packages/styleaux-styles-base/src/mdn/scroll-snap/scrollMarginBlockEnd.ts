import { ScrollMarginBlockEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINBLOCKEND='scrollMarginBlockEnd'

export interface IScrollMarginBlockEndProps<T> {
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  scrollMarginBlockEnd: T;
}

export const scrollMarginBlockEnd = <
  T = ScrollMarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINBLOCKEND,
    prop: SCROLLMARGINBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const scrollMarginBlockEndRule = <T = ScrollMarginBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINBLOCKEND, getValue: transformer})
