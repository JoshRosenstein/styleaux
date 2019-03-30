import { BorderBottomColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOMCOLOR='borderBottomColor'

export interface IBorderBottomColorProps<T> {
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor: T;
}

export const borderBottomColor = <
  T = BorderBottomColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOMCOLOR,
    prop: BORDERBOTTOMCOLOR,
    alias,
    key,
    transformValue,
  })

export const borderBottomColorRule = <T = BorderBottomColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMCOLOR, getValue: transformer})
