import { BorderInlineEndProperty } from '@roseys/csstype';

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

export const borderInlineEnd = <
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

export const borderInlineEndRule = <T = BorderInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEEND, getValue: transformer})
