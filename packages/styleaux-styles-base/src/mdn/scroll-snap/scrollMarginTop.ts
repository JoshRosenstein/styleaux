import { ScrollMarginTopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINTOP='scrollMarginTop'

export interface ScrollMarginTopProps<T=ScrollMarginTopProperty> {
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  [SCROLLMARGINTOP]: T;
}

export const createScrollMarginTop = <
  T = ScrollMarginTopProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollMarginTopProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollMarginTopProps<T>,Theme,Media>({
    cssProp:SCROLLMARGINTOP,
    prop:SCROLLMARGINTOP,
    key,
    transformValue,
  })

export const createScrollMarginTopRule = <T = ScrollMarginTopProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SCROLLMARGINTOP, getValue: transformer})

export const scrollMarginTop =createScrollMarginTop()

export const scrollMarginTopRule =createScrollMarginTopRule()
