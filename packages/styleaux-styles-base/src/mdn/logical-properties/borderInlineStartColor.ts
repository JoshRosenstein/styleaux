import { BorderInlineStartColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERINLINESTARTCOLOR='borderInlineStartColor'

export interface BorderInlineStartColorProps<T=BorderInlineStartColorProperty> {
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  [BORDERINLINESTARTCOLOR]: T;
}

export const createBorderInlineStartColor = <
  T = BorderInlineStartColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderInlineStartColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderInlineStartColorProps<T>,Theme,Media>({
    cssProp:BORDERINLINESTARTCOLOR,
    prop:BORDERINLINESTARTCOLOR,
    key,
    transformValue,
  })

export const createBorderInlineStartColorRule = <T = BorderInlineStartColorProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERINLINESTARTCOLOR, getValue: transformer})

export const borderInlineStartColor =createBorderInlineStartColor()

export const borderInlineStartColorRule =createBorderInlineStartColorRule()
