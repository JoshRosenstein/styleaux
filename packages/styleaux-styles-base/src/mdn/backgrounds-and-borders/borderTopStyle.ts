import { BorderTopStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOPSTYLE='borderTopStyle'

export interface IBorderTopStyleProps<T> {
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle: T;
}

export const borderTopStyle = <
  T = BorderTopStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopStyleProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOPSTYLE,
    prop: BORDERTOPSTYLE,
    alias,
    key,
    transformValue,
  })

export const borderTopStyleRule = <T = BorderTopStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOPSTYLE, getValue: transformer})
