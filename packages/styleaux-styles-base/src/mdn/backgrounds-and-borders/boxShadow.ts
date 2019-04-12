import { BoxShadowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOXSHADOW='boxShadow'

export interface BoxShadowProps<T=BoxShadowProperty> {
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  [BOXSHADOW]: T;
}

export const createBoxShadow = <
  T = BoxShadowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BoxShadowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BoxShadowProps<T>,Theme,Media>({
    cssProp:BOXSHADOW,
    prop:BOXSHADOW,
    key,
    transformValue,
  })

export const createBoxShadowRule = <T = BoxShadowProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BOXSHADOW, getValue: transformer})

export const boxShadow =createBoxShadow()

export const boxShadowRule =createBoxShadowRule()
