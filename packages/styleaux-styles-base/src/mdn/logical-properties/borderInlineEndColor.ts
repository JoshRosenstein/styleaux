import { BorderInlineEndColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINEENDCOLOR='borderInlineEndColor'

export interface IBorderInlineEndColorProps<T> {
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor: T;
}

export const createBorderInlineEndColor = <
  T = BorderInlineEndColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineEndColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINEENDCOLOR,
    prop: BORDERINLINEENDCOLOR,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineEndColorRule = <T = BorderInlineEndColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEENDCOLOR, getValue: transformer})

export const borderInlineEndColor =createBorderInlineEndColor()

export const borderInlineEndColorRule =createBorderInlineEndColorRule()
