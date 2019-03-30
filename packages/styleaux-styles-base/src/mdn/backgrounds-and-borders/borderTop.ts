import { BorderTopProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOP='borderTop'

export interface IBorderTopProps<T> {
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop: T;
}

export const borderTop = <
  T = BorderTopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOP,
    prop: BORDERTOP,
    alias,
    key,
    transformValue,
  })

export const borderTopRule = <T = BorderTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOP, getValue: transformer})
