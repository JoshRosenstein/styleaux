import { BorderInlineWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINEWIDTH='borderInlineWidth'

export interface IBorderInlineWidthProps<T> {
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  borderInlineWidth: T;
}

export const createBorderInlineWidth = <
  T = BorderInlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINEWIDTH,
    prop: BORDERINLINEWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineWidthRule = <T = BorderInlineWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINEWIDTH, getValue: transformer})

export const borderInlineWidth =createBorderInlineWidth()

export const borderInlineWidthRule =createBorderInlineWidthRule()
