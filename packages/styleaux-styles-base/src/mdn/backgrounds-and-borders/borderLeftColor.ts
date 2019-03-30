import { BorderLeftColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERLEFTCOLOR='borderLeftColor'

export interface IBorderLeftColorProps<T> {
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor: T;
}

export const borderLeftColor = <
  T = BorderLeftColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderLeftColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERLEFTCOLOR,
    prop: BORDERLEFTCOLOR,
    alias,
    key,
    transformValue,
  })

export const borderLeftColorRule = <T = BorderLeftColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERLEFTCOLOR, getValue: transformer})
