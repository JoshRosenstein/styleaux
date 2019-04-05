import { BorderLeftColorProperty } from '@styleaux/csstype';

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

export const createBorderLeftColor = <
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

export const createBorderLeftColorRule = <T = BorderLeftColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERLEFTCOLOR, getValue: transformer})

export const borderLeftColor =createBorderLeftColor()

export const borderLeftColorRule =createBorderLeftColorRule()
