import { BorderInlineStartStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERINLINESTARTSTYLE='borderInlineStartStyle'

export interface BorderInlineStartStyleProps<T=BorderInlineStartStyleProperty> {
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  [BORDERINLINESTARTSTYLE]: T;
}

export const createBorderInlineStartStyle = <
  T = BorderInlineStartStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderInlineStartStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderInlineStartStyleProps<T>,Theme,Media>({
    cssProp:BORDERINLINESTARTSTYLE,
    prop:BORDERINLINESTARTSTYLE,
    key,
    transformValue,
  })

export const createBorderInlineStartStyleRule = <T = BorderInlineStartStyleProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERINLINESTARTSTYLE, getValue: transformer})

export const borderInlineStartStyle =createBorderInlineStartStyle()

export const borderInlineStartStyleRule =createBorderInlineStartStyleRule()
