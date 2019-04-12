import { OutlineColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OUTLINECOLOR='outlineColor'

export interface OutlineColorProps<T=OutlineColorProperty> {
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  [OUTLINECOLOR]: T;
}

export const createOutlineColor = <
  T = OutlineColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OutlineColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OutlineColorProps<T>,Theme,Media>({
    cssProp:OUTLINECOLOR,
    prop:OUTLINECOLOR,
    key,
    transformValue,
  })

export const createOutlineColorRule = <T = OutlineColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OUTLINECOLOR, getValue: transformer})

export const outlineColor =createOutlineColor()

export const outlineColorRule =createOutlineColorRule()
