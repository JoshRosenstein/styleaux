import { BorderStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERSTYLE='borderStyle'

export interface BorderStyleProps<T=BorderStyleProperty> {
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  [BORDERSTYLE]: T;
}

export const createBorderStyle = <
  T = BorderStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderStyleProps<T>,Theme,Media>({
    cssProp:BORDERSTYLE,
    prop:BORDERSTYLE,
    key,
    transformValue,
  })

export const createBorderStyleRule = <T = BorderStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERSTYLE, getValue: transformer})

export const borderStyle =createBorderStyle()

export const borderStyleRule =createBorderStyleRule()
