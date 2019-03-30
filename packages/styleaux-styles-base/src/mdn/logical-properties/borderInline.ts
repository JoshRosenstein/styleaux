import { BorderInlineProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINE='borderInline'

export interface IBorderInlineProps<T> {
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  borderInline: T;
}

export const borderInline = <
  T = BorderInlineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINE,
    prop: BORDERINLINE,
    alias,
    key,
    transformValue,
  })

export const borderInlineRule = <T = BorderInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINE, getValue: transformer})
