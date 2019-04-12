import { BorderLeftStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERLEFTSTYLE='borderLeftStyle'

export interface BorderLeftStyleProps<T=BorderLeftStyleProperty> {
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  [BORDERLEFTSTYLE]: T;
}

export const createBorderLeftStyle = <
  T = BorderLeftStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderLeftStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderLeftStyleProps<T>,Theme,Media>({
    cssProp:BORDERLEFTSTYLE,
    prop:BORDERLEFTSTYLE,
    key,
    transformValue,
  })

export const createBorderLeftStyleRule = <T = BorderLeftStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERLEFTSTYLE, getValue: transformer})

export const borderLeftStyle =createBorderLeftStyle()

export const borderLeftStyleRule =createBorderLeftStyleRule()
