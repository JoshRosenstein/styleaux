import { BorderBlockStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKSTYLE='borderBlockStyle'

export interface IBorderBlockStyleProps<T> {
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  borderBlockStyle: T;
}

export const borderBlockStyle = <
  T = BorderBlockStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKSTYLE,
    prop: BORDERBLOCKSTYLE,
    alias,
    key,
    transformValue,
  })

export const borderBlockStyleRule = <T = BorderBlockStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKSTYLE, getValue: transformer})
