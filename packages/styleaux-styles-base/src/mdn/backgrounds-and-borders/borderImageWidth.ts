import { BorderImageWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERIMAGEWIDTH='borderImageWidth'

export interface BorderImageWidthProps<T=BorderImageWidthProperty> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  [BORDERIMAGEWIDTH]: T;
}

export const createBorderImageWidth = <
  T = BorderImageWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderImageWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderImageWidthProps<T>,Theme,Media>({
    cssProp:BORDERIMAGEWIDTH,
    prop:BORDERIMAGEWIDTH,
    key,
    transformValue,
  })

export const createBorderImageWidthRule = <T = BorderImageWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERIMAGEWIDTH, getValue: transformer})

export const borderImageWidth =createBorderImageWidth()

export const borderImageWidthRule =createBorderImageWidthRule()
