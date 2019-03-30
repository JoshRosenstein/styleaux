import { BorderBottomProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOM='borderBottom'

export interface IBorderBottomProps<T> {
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom: T;
}

export const borderBottom = <
  T = BorderBottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOM,
    prop: BORDERBOTTOM,
    alias,
    key,
    transformValue,
  })

export const borderBottomRule = <T = BorderBottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOM, getValue: transformer})