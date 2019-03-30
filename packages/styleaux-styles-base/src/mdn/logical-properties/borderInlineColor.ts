import { BorderInlineColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINECOLOR='borderInlineColor'

export interface IBorderInlineColorProps<T> {
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  borderInlineColor: T;
}

export const borderInlineColor = <
  T = BorderInlineColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINECOLOR,
    prop: BORDERINLINECOLOR,
    alias,
    key,
    transformValue,
  })

export const borderInlineColorRule = <T = BorderInlineColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINECOLOR, getValue: transformer})
