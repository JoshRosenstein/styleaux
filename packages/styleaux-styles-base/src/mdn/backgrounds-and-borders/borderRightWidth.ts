import { BorderRightWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERRIGHTWIDTH='borderRightWidth'

export interface BorderRightWidthProps<T=BorderRightWidthProperty> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  [BORDERRIGHTWIDTH]: T;
}

export const createBorderRightWidth = <
  T = BorderRightWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderRightWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderRightWidthProps<T>,Theme,Media>({
    cssProp:BORDERRIGHTWIDTH,
    prop:BORDERRIGHTWIDTH,
    key,
    transformValue,
  })

export const createBorderRightWidthRule = <T = BorderRightWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERRIGHTWIDTH, getValue: transformer})

export const borderRightWidth =createBorderRightWidth()

export const borderRightWidthRule =createBorderRightWidthRule()
