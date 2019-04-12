import { BorderBottomRightRadiusProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBOTTOMRIGHTRADIUS='borderBottomRightRadius'

export interface BorderBottomRightRadiusProps<T=BorderBottomRightRadiusProperty> {
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  [BORDERBOTTOMRIGHTRADIUS]: T;
}

export const createBorderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBottomRightRadiusProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBottomRightRadiusProps<T>,Theme,Media>({
    cssProp:BORDERBOTTOMRIGHTRADIUS,
    prop:BORDERBOTTOMRIGHTRADIUS,
    key,
    transformValue,
  })

export const createBorderBottomRightRadiusRule = <T = BorderBottomRightRadiusProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBOTTOMRIGHTRADIUS, getValue: transformer})

export const borderBottomRightRadius =createBorderBottomRightRadius()

export const borderBottomRightRadiusRule =createBorderBottomRightRadiusRule()
