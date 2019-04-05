import { BorderInlineStartStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINESTARTSTYLE='borderInlineStartStyle'

export interface IBorderInlineStartStyleProps<T> {
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle: T;
}

export const createBorderInlineStartStyle = <
  T = BorderInlineStartStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINESTARTSTYLE,
    prop: BORDERINLINESTARTSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineStartStyleRule = <T = BorderInlineStartStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINESTARTSTYLE, getValue: transformer})

export const borderInlineStartStyle =createBorderInlineStartStyle()

export const borderInlineStartStyleRule =createBorderInlineStartStyleRule()
