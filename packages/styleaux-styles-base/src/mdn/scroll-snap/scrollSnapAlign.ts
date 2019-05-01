import { ScrollSnapAlignProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLSNAPALIGN='scrollSnapAlign'

export interface ScrollSnapAlignProps<T=ScrollSnapAlignProperty> {
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  [SCROLLSNAPALIGN]: T;
}

export const createScrollSnapAlign = <
  T = ScrollSnapAlignProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollSnapAlignProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollSnapAlignProps<T>,Theme,Media>({
    cssProp:SCROLLSNAPALIGN,
    prop:SCROLLSNAPALIGN,
    key,
    transformValue,
  })

export const createScrollSnapAlignRule = <T = ScrollSnapAlignProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SCROLLSNAPALIGN, getValue: transformer})

export const scrollSnapAlign =createScrollSnapAlign()

export const scrollSnapAlignRule =createScrollSnapAlignRule()
