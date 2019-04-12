import { ScrollMarginInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCROLLMARGININLINEEND='scrollMarginInlineEnd'

export interface ScrollMarginInlineEndProps<T=ScrollMarginInlineEndProperty> {
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  [SCROLLMARGININLINEEND]: T;
}

export const createScrollMarginInlineEnd = <
  T = ScrollMarginInlineEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollMarginInlineEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollMarginInlineEndProps<T>,Theme,Media>({
    cssProp:SCROLLMARGININLINEEND,
    prop:SCROLLMARGININLINEEND,
    key,
    transformValue,
  })

export const createScrollMarginInlineEndRule = <T = ScrollMarginInlineEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCROLLMARGININLINEEND, getValue: transformer})

export const scrollMarginInlineEnd =createScrollMarginInlineEnd()

export const scrollMarginInlineEndRule =createScrollMarginInlineEndRule()
