import { BorderColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERCOLOR='borderColor'

export interface BorderColorProps<T=BorderColorProperty> {
  /**
   * The **`border-color`** shorthand CSS property sets the color of all sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  [BORDERCOLOR]: T;
}

export const createBorderColor = <
  T = BorderColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderColorProps<T>,Theme,Media>({
    cssProp:BORDERCOLOR,
    prop:BORDERCOLOR,
    key,
    transformValue,
  })

export const createBorderColorRule = <T = BorderColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERCOLOR, getValue: transformer})

export const borderColor =createBorderColor()

export const borderColorRule =createBorderColorRule()
