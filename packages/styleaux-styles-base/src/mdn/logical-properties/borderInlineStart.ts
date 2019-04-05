import { BorderInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINESTART='borderInlineStart'

export interface IBorderInlineStartProps<T> {
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart: T;
}

export const createBorderInlineStart = <
  T = BorderInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINESTART,
    prop: BORDERINLINESTART,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineStartRule = <T = BorderInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINESTART, getValue: transformer})

export const borderInlineStart =createBorderInlineStart()

export const borderInlineStartRule =createBorderInlineStartRule()
