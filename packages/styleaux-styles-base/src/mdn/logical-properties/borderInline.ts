import { BorderInlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERINLINE='borderInline'

export interface BorderInlineProps<T=BorderInlineProperty> {
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  [BORDERINLINE]: T;
}

export const createBorderInline = <
  T = BorderInlineProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderInlineProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderInlineProps<T>,Theme,Media>({
    cssProp:BORDERINLINE,
    prop:BORDERINLINE,
    key,
    transformValue,
  })

export const createBorderInlineRule = <T = BorderInlineProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERINLINE, getValue: transformer})

export const borderInline =createBorderInline()

export const borderInlineRule =createBorderInlineRule()
