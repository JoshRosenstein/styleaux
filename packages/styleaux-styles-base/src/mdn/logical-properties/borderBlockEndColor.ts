import { BorderBlockEndColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCKENDCOLOR='borderBlockEndColor'

export interface BorderBlockEndColorProps<T=BorderBlockEndColorProperty> {
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  [BORDERBLOCKENDCOLOR]: T;
}

export const createBorderBlockEndColor = <
  T = BorderBlockEndColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockEndColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockEndColorProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKENDCOLOR,
    prop:BORDERBLOCKENDCOLOR,
    key,
    transformValue,
  })

export const createBorderBlockEndColorRule = <T = BorderBlockEndColorProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKENDCOLOR, getValue: transformer})

export const borderBlockEndColor =createBorderBlockEndColor()

export const borderBlockEndColorRule =createBorderBlockEndColorRule()
