import { BorderImageOutsetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERIMAGEOUTSET='borderImageOutset'

export interface BorderImageOutsetProps<T=BorderImageOutsetProperty> {
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  [BORDERIMAGEOUTSET]: T;
}

export const createBorderImageOutset = <
  T = BorderImageOutsetProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderImageOutsetProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderImageOutsetProps<T>,Theme,Media>({
    cssProp:BORDERIMAGEOUTSET,
    prop:BORDERIMAGEOUTSET,
    key,
    transformValue,
  })

export const createBorderImageOutsetRule = <T = BorderImageOutsetProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERIMAGEOUTSET, getValue: transformer})

export const borderImageOutset =createBorderImageOutset()

export const borderImageOutsetRule =createBorderImageOutsetRule()
