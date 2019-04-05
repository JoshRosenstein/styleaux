import { BorderInlineEndWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINEENDWIDTH='borderInlineEndWidth'

export interface IBorderInlineEndWidthProps<T> {
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth: T;
}

export const createBorderInlineEndWidth = <
  T = BorderInlineEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINEENDWIDTH,
    prop: BORDERINLINEENDWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineEndWidthRule = <T = BorderInlineEndWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEENDWIDTH, getValue: transformer})

export const borderInlineEndWidth =createBorderInlineEndWidth()

export const borderInlineEndWidthRule =createBorderInlineEndWidthRule()
