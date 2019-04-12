import { BottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOTTOM='bottom'

export interface BottomProps<T=BottomProperty> {
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  [BOTTOM]: T;
}

export const createBottom = <
  T = BottomProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BottomProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BottomProps<T>,Theme,Media>({
    cssProp:BOTTOM,
    prop:BOTTOM,
    key,
    transformValue,
  })

export const createBottomRule = <T = BottomProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BOTTOM, getValue: transformer})

export const bottom =createBottom()

export const bottomRule =createBottomRule()
