import { BorderRightColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERRIGHTCOLOR='borderRightColor'

export interface IBorderRightColorProps<T> {
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor: T;
}

export const createBorderRightColor = <
  T = BorderRightColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderRightColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERRIGHTCOLOR,
    prop: BORDERRIGHTCOLOR,
    alias,
    key,
    transformValue,
  })

export const createBorderRightColorRule = <T = BorderRightColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRIGHTCOLOR, getValue: transformer})

export const borderRightColor =createBorderRightColor()

export const borderRightColorRule =createBorderRightColorRule()
