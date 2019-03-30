import { BorderColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERCOLOR='borderColor'

export interface IBorderColorProps<T> {
  /**
   * The **`border-color`** shorthand CSS property sets the color of all sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor: T;
}

export const borderColor = <
  T = BorderColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERCOLOR,
    prop: BORDERCOLOR,
    alias,
    key,
    transformValue,
  })

export const borderColorRule = <T = BorderColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERCOLOR, getValue: transformer})
