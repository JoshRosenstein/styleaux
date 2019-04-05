import { BorderBlockEndStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKENDSTYLE='borderBlockEndStyle'

export interface IBorderBlockEndStyleProps<T> {
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle: T;
}

export const createBorderBlockEndStyle = <
  T = BorderBlockEndStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKENDSTYLE,
    prop: BORDERBLOCKENDSTYLE,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockEndStyleRule = <T = BorderBlockEndStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKENDSTYLE, getValue: transformer})

export const borderBlockEndStyle =createBorderBlockEndStyle()

export const borderBlockEndStyleRule =createBorderBlockEndStyleRule()
