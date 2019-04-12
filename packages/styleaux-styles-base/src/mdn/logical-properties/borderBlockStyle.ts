import { BorderBlockStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCKSTYLE='borderBlockStyle'

export interface BorderBlockStyleProps<T=BorderBlockStyleProperty> {
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  [BORDERBLOCKSTYLE]: T;
}

export const createBorderBlockStyle = <
  T = BorderBlockStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockStyleProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKSTYLE,
    prop:BORDERBLOCKSTYLE,
    key,
    transformValue,
  })

export const createBorderBlockStyleRule = <T = BorderBlockStyleProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKSTYLE, getValue: transformer})

export const borderBlockStyle =createBorderBlockStyle()

export const borderBlockStyleRule =createBorderBlockStyleRule()
