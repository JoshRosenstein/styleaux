import { BorderTopLeftRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERTOPLEFTRADIUS='borderTopLeftRadius'

export interface BorderTopLeftRadiusProps<T=BorderTopLeftRadiusProperty> {
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  [BORDERTOPLEFTRADIUS]: T;
}

export const createBorderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderTopLeftRadiusProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderTopLeftRadiusProps<T>,Theme,Media>({
    cssProp:BORDERTOPLEFTRADIUS,
    prop:BORDERTOPLEFTRADIUS,
    key,
    transformValue,
  })

export const createBorderTopLeftRadiusRule = <T = BorderTopLeftRadiusProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERTOPLEFTRADIUS, getValue: transformer})

export const borderTopLeftRadius =createBorderTopLeftRadius()

export const borderTopLeftRadiusRule =createBorderTopLeftRadiusRule()
