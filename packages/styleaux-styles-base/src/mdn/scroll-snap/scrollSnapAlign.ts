import { ScrollSnapAlignProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLSNAPALIGN='scrollSnapAlign'

export interface IScrollSnapAlignProps<T> {
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  scrollSnapAlign: T;
}

export const scrollSnapAlign = <
  T = ScrollSnapAlignProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollSnapAlignProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLSNAPALIGN,
    prop: SCROLLSNAPALIGN,
    alias,
    key,
    transformValue,
  })

export const scrollSnapAlignRule = <T = ScrollSnapAlignProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLSNAPALIGN, getValue: transformer})
