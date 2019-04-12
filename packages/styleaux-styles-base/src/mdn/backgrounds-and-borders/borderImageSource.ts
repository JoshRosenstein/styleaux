import { BorderImageSourceProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERIMAGESOURCE='borderImageSource'

export interface BorderImageSourceProps<T=BorderImageSourceProperty> {
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  [BORDERIMAGESOURCE]: T;
}

export const createBorderImageSource = <
  T = BorderImageSourceProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderImageSourceProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderImageSourceProps<T>,Theme,Media>({
    cssProp:BORDERIMAGESOURCE,
    prop:BORDERIMAGESOURCE,
    key,
    transformValue,
  })

export const createBorderImageSourceRule = <T = BorderImageSourceProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERIMAGESOURCE, getValue: transformer})

export const borderImageSource =createBorderImageSource()

export const borderImageSourceRule =createBorderImageSourceRule()
