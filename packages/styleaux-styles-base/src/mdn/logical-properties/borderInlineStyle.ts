import { BorderInlineStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINESTYLE='borderInlineStyle'

export interface IBorderInlineStyleProps<T> {
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  borderInlineStyle: T;
}

export const borderInlineStyle = <
  T = BorderInlineStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINESTYLE,
    prop: BORDERINLINESTYLE,
    alias,
    key,
    transformValue,
  })

export const borderInlineStyleRule = <T = BorderInlineStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINESTYLE, getValue: transformer})
