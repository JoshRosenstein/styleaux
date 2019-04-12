import { BorderInlineWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERINLINEWIDTH='borderInlineWidth'

export interface BorderInlineWidthProps<T=BorderInlineWidthProperty> {
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  [BORDERINLINEWIDTH]: T;
}

export const createBorderInlineWidth = <
  T = BorderInlineWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderInlineWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderInlineWidthProps<T>,Theme,Media>({
    cssProp:BORDERINLINEWIDTH,
    prop:BORDERINLINEWIDTH,
    key,
    transformValue,
  })

export const createBorderInlineWidthRule = <T = BorderInlineWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERINLINEWIDTH, getValue: transformer})

export const borderInlineWidth =createBorderInlineWidth()

export const borderInlineWidthRule =createBorderInlineWidthRule()
