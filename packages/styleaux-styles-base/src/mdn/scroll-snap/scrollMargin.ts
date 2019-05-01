import { ScrollMarginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SCROLLMARGIN='scrollMargin'

export interface ScrollMarginProps<T=ScrollMarginProperty> {
  /**
   * The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  [SCROLLMARGIN]: T;
}

export const createScrollMargin = <
  T = ScrollMarginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollMarginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollMarginProps<T>,Theme,Media>({
    cssProp:SCROLLMARGIN,
    prop:SCROLLMARGIN,
    key,
    transformValue,
  })

export const createScrollMarginRule = <T = ScrollMarginProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SCROLLMARGIN, getValue: transformer})

export const scrollMargin =createScrollMargin()

export const scrollMarginRule =createScrollMarginRule()
