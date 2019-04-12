import { BorderWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERWIDTH='borderWidth'

export interface BorderWidthProps<T=BorderWidthProperty> {
  /**
   * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  [BORDERWIDTH]: T;
}

export const createBorderWidth = <
  T = BorderWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderWidthProps<T>,Theme,Media>({
    cssProp:BORDERWIDTH,
    prop:BORDERWIDTH,
    key,
    transformValue,
  })

export const createBorderWidthRule = <T = BorderWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERWIDTH, getValue: transformer})

export const borderWidth =createBorderWidth()

export const borderWidthRule =createBorderWidthRule()
