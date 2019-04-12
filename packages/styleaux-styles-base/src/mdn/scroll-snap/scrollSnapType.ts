import { ScrollSnapTypeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCROLLSNAPTYPE='scrollSnapType'

export interface ScrollSnapTypeProps<T=ScrollSnapTypeProperty> {
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  [SCROLLSNAPTYPE]: T;
}

export const createScrollSnapType = <
  T = ScrollSnapTypeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollSnapTypeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollSnapTypeProps<T>,Theme,Media>({
    cssProp:SCROLLSNAPTYPE,
    prop:SCROLLSNAPTYPE,
    key,
    transformValue,
  })

export const createScrollSnapTypeRule = <T = ScrollSnapTypeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCROLLSNAPTYPE, getValue: transformer})

export const scrollSnapType =createScrollSnapType()

export const scrollSnapTypeRule =createScrollSnapTypeRule()
