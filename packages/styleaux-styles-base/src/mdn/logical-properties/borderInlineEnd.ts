import { BorderInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINEEND='borderInlineEnd'

export interface IBorderInlineEndProps<T> {
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd: T;
}

export const createBorderInlineEnd = <
  T = BorderInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINEEND,
    prop: BORDERINLINEEND,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineEndRule = <T = BorderInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEEND, getValue: transformer})

export const borderInlineEnd =createBorderInlineEnd()

export const borderInlineEndRule =createBorderInlineEndRule()
