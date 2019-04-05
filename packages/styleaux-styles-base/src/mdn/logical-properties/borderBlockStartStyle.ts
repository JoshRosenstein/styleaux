import { BorderBlockStartStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKSTARTSTYLE='borderBlockStartStyle'

export interface IBorderBlockStartStyleProps<T> {
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle: T;
}

export const createBorderBlockStartStyle = <
  T = BorderBlockStartStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKSTARTSTYLE,
    prop: BORDERBLOCKSTARTSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockStartStyleRule = <T = BorderBlockStartStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKSTARTSTYLE, getValue: transformer})

export const borderBlockStartStyle =createBorderBlockStartStyle()

export const borderBlockStartStyleRule =createBorderBlockStartStyleRule()
