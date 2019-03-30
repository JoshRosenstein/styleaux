import { MarginProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGIN='margin'

export interface IMarginProps<T> {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin: T;
}

export const margin = <
  T = MarginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginProps<T>, Theme, Breakpoints>({
    cssProp: MARGIN,
    prop: MARGIN,
    alias,
    key,
    transformValue,
  })

export const marginRule = <T = MarginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGIN, getValue: transformer})
