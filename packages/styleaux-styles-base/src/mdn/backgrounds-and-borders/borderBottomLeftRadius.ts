import { BorderBottomLeftRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBOTTOMLEFTRADIUS='borderBottomLeftRadius'

export interface BorderBottomLeftRadiusProps<T=BorderBottomLeftRadiusProperty> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  [BORDERBOTTOMLEFTRADIUS]: T;
}

export const createBorderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBottomLeftRadiusProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBottomLeftRadiusProps<T>,Theme,Media>({
    cssProp:BORDERBOTTOMLEFTRADIUS,
    prop:BORDERBOTTOMLEFTRADIUS,
    key,
    transformValue,
  })

export const createBorderBottomLeftRadiusRule = <T = BorderBottomLeftRadiusProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERBOTTOMLEFTRADIUS, getValue: transformer})

export const borderBottomLeftRadius =createBorderBottomLeftRadius()

export const borderBottomLeftRadiusRule =createBorderBottomLeftRadiusRule()
