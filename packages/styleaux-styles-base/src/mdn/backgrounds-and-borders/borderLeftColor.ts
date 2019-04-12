import { BorderLeftColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERLEFTCOLOR='borderLeftColor'

export interface BorderLeftColorProps<T=BorderLeftColorProperty> {
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  [BORDERLEFTCOLOR]: T;
}

export const createBorderLeftColor = <
  T = BorderLeftColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderLeftColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderLeftColorProps<T>,Theme,Media>({
    cssProp:BORDERLEFTCOLOR,
    prop:BORDERLEFTCOLOR,
    key,
    transformValue,
  })

export const createBorderLeftColorRule = <T = BorderLeftColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERLEFTCOLOR, getValue: transformer})

export const borderLeftColor =createBorderLeftColor()

export const borderLeftColorRule =createBorderLeftColorRule()
