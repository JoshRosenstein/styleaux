import { BorderInlineEndStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERINLINEENDSTYLE='borderInlineEndStyle'

export interface BorderInlineEndStyleProps<T=BorderInlineEndStyleProperty> {
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  [BORDERINLINEENDSTYLE]: T;
}

export const createBorderInlineEndStyle = <
  T = BorderInlineEndStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderInlineEndStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderInlineEndStyleProps<T>,Theme,Media>({
    cssProp:BORDERINLINEENDSTYLE,
    prop:BORDERINLINEENDSTYLE,
    key,
    transformValue,
  })

export const createBorderInlineEndStyleRule = <T = BorderInlineEndStyleProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERINLINEENDSTYLE, getValue: transformer})

export const borderInlineEndStyle =createBorderInlineEndStyle()

export const borderInlineEndStyleRule =createBorderInlineEndStyleRule()
