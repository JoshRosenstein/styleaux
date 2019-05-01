import { BorderLeftWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERLEFTWIDTH='borderLeftWidth'

export interface BorderLeftWidthProps<T=BorderLeftWidthProperty> {
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  [BORDERLEFTWIDTH]: T;
}

export const createBorderLeftWidth = <
  T = BorderLeftWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderLeftWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderLeftWidthProps<T>,Theme,Media>({
    cssProp:BORDERLEFTWIDTH,
    prop:BORDERLEFTWIDTH,
    key,
    transformValue,
  })

export const createBorderLeftWidthRule = <T = BorderLeftWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERLEFTWIDTH, getValue: transformer})

export const borderLeftWidth =createBorderLeftWidth()

export const borderLeftWidthRule =createBorderLeftWidthRule()
