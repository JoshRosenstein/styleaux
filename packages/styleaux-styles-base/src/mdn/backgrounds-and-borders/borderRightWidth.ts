import { BorderRightWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERRIGHTWIDTH='borderRightWidth'

export interface IBorderRightWidthProps<T> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth: T;
}

export const borderRightWidth = <
  T = BorderRightWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderRightWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERRIGHTWIDTH,
    prop: BORDERRIGHTWIDTH,
    alias,
    key,
    transformValue,
  })

export const borderRightWidthRule = <T = BorderRightWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRIGHTWIDTH, getValue: transformer})
