import { BorderInlineEndStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINEENDSTYLE='borderInlineEndStyle'

export interface IBorderInlineEndStyleProps<T> {
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle: T;
}

export const createBorderInlineEndStyle = <
  T = BorderInlineEndStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINEENDSTYLE,
    prop: BORDERINLINEENDSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineEndStyleRule = <T = BorderInlineEndStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEENDSTYLE, getValue: transformer})

export const borderInlineEndStyle =createBorderInlineEndStyle()

export const borderInlineEndStyleRule =createBorderInlineEndStyleRule()
