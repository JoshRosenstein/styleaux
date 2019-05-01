import { PlaceContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PLACECONTENT='placeContent'

export interface PlaceContentProps<T=PlaceContentProperty> {
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  [PLACECONTENT]: T;
}

export const createPlaceContent = <
  T = PlaceContentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PlaceContentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PlaceContentProps<T>,Theme,Media>({
    cssProp:PLACECONTENT,
    prop:PLACECONTENT,
    key,
    transformValue,
  })

export const createPlaceContentRule = <T = PlaceContentProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PLACECONTENT, getValue: transformer})

export const placeContent =createPlaceContent()

export const placeContentRule =createPlaceContentRule()
