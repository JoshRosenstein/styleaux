import { BorderInlineProperty } from '@styleaux/csstype';

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

export const createBorderInline = <
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

export const createBorderInlineRule = <T = BorderInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINE, getValue: transformer})

export const borderInline =createBorderInline()

export const borderInlineRule =createBorderInlineRule()
