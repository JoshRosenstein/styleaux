import { MarginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGIN='margin'

export interface MarginProps<T=MarginProperty> {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  [MARGIN]: T;
}

export const createMargin = <
  T = MarginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginProps<T>,Theme,Media>({
    cssProp:MARGIN,
    prop:MARGIN,
    key,
    transformValue,
  })

export const createMarginRule = <T = MarginProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGIN, getValue: transformer})

export const margin =createMargin()

export const marginRule =createMarginRule()
