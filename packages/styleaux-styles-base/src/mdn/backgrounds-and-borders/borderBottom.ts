import { BorderBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBOTTOM='borderBottom'

export interface BorderBottomProps<T=BorderBottomProperty> {
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  [BORDERBOTTOM]: T;
}

export const createBorderBottom = <
  T = BorderBottomProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBottomProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBottomProps<T>,Theme,Media>({
    cssProp:BORDERBOTTOM,
    prop:BORDERBOTTOM,
    key,
    transformValue,
  })

export const createBorderBottomRule = <T = BorderBottomProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBOTTOM, getValue: transformer})

export const borderBottom =createBorderBottom()

export const borderBottomRule =createBorderBottomRule()
