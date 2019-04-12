import { BorderTopStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERTOPSTYLE='borderTopStyle'

export interface BorderTopStyleProps<T=BorderTopStyleProperty> {
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  [BORDERTOPSTYLE]: T;
}

export const createBorderTopStyle = <
  T = BorderTopStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderTopStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderTopStyleProps<T>,Theme,Media>({
    cssProp:BORDERTOPSTYLE,
    prop:BORDERTOPSTYLE,
    key,
    transformValue,
  })

export const createBorderTopStyleRule = <T = BorderTopStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERTOPSTYLE, getValue: transformer})

export const borderTopStyle =createBorderTopStyle()

export const borderTopStyleRule =createBorderTopStyleRule()
