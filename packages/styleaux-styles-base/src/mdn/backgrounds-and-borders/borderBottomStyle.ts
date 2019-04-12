import { BorderBottomStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBOTTOMSTYLE='borderBottomStyle'

export interface BorderBottomStyleProps<T=BorderBottomStyleProperty> {
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  [BORDERBOTTOMSTYLE]: T;
}

export const createBorderBottomStyle = <
  T = BorderBottomStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBottomStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBottomStyleProps<T>,Theme,Media>({
    cssProp:BORDERBOTTOMSTYLE,
    prop:BORDERBOTTOMSTYLE,
    key,
    transformValue,
  })

export const createBorderBottomStyleRule = <T = BorderBottomStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBOTTOMSTYLE, getValue: transformer})

export const borderBottomStyle =createBorderBottomStyle()

export const borderBottomStyleRule =createBorderBottomStyleRule()
