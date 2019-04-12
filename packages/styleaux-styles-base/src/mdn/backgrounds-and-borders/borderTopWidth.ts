import { BorderTopWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERTOPWIDTH='borderTopWidth'

export interface BorderTopWidthProps<T=BorderTopWidthProperty> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  [BORDERTOPWIDTH]: T;
}

export const createBorderTopWidth = <
  T = BorderTopWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderTopWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderTopWidthProps<T>,Theme,Media>({
    cssProp:BORDERTOPWIDTH,
    prop:BORDERTOPWIDTH,
    key,
    transformValue,
  })

export const createBorderTopWidthRule = <T = BorderTopWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERTOPWIDTH, getValue: transformer})

export const borderTopWidth =createBorderTopWidth()

export const borderTopWidthRule =createBorderTopWidthRule()
