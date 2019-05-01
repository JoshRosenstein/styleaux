import { BorderTopColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERTOPCOLOR='borderTopColor'

export interface BorderTopColorProps<T=BorderTopColorProperty> {
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  [BORDERTOPCOLOR]: T;
}

export const createBorderTopColor = <
  T = BorderTopColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderTopColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderTopColorProps<T>,Theme,Media>({
    cssProp:BORDERTOPCOLOR,
    prop:BORDERTOPCOLOR,
    key,
    transformValue,
  })

export const createBorderTopColorRule = <T = BorderTopColorProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERTOPCOLOR, getValue: transformer})

export const borderTopColor =createBorderTopColor()

export const borderTopColorRule =createBorderTopColorRule()
