import { ScrollMarginBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGINBLOCKEND='scrollMarginBlockEnd'

export interface ScrollMarginBlockEndProps<T=ScrollMarginBlockEndProperty> {
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  [SCROLLMARGINBLOCKEND]: T;
}

export const createScrollMarginBlockEnd = <
  T = ScrollMarginBlockEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollMarginBlockEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollMarginBlockEndProps<T>,Theme,Media>({
    cssProp:SCROLLMARGINBLOCKEND,
    prop:SCROLLMARGINBLOCKEND,
    key,
    transformValue,
  })

export const createScrollMarginBlockEndRule = <T = ScrollMarginBlockEndProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SCROLLMARGINBLOCKEND, getValue: transformer})

export const scrollMarginBlockEnd =createScrollMarginBlockEnd()

export const scrollMarginBlockEndRule =createScrollMarginBlockEndRule()
