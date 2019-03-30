import { BorderProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDER='border'

export interface IBorderProps<T> {
  /**
   * The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border: T;
}

export const border = <
  T = BorderProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderProps<T>, Theme, Breakpoints>({
    cssProp: BORDER,
    prop: BORDER,
    alias,
    key,
    transformValue,
  })

export const borderRule = <T = BorderProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDER, getValue: transformer})
