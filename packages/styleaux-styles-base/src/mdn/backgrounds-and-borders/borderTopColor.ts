import { BorderTopColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOPCOLOR='borderTopColor'

export interface IBorderTopColorProps<T> {
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor: T;
}

export const borderTopColor = <
  T = BorderTopColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOPCOLOR,
    prop: BORDERTOPCOLOR,
    alias,
    key,
    transformValue,
  })

export const borderTopColorRule = <T = BorderTopColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOPCOLOR, getValue: transformer})
