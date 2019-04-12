import { MarginBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGINBOTTOM='marginBottom'

export interface MarginBottomProps<T=MarginBottomProperty> {
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  [MARGINBOTTOM]: T;
}

export const createMarginBottom = <
  T = MarginBottomProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginBottomProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginBottomProps<T>,Theme,Media>({
    cssProp:MARGINBOTTOM,
    prop:MARGINBOTTOM,
    key,
    transformValue,
  })

export const createMarginBottomRule = <T = MarginBottomProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGINBOTTOM, getValue: transformer})

export const marginBottom =createMarginBottom()

export const marginBottomRule =createMarginBottomRule()
