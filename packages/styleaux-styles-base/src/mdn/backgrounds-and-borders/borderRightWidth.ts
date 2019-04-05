import { BorderRightWidthProperty } from '@styleaux/csstype';

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

export const createBorderRightWidth = <
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

export const createBorderRightWidthRule = <T = BorderRightWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRIGHTWIDTH, getValue: transformer})

export const borderRightWidth =createBorderRightWidth()

export const borderRightWidthRule =createBorderRightWidthRule()
