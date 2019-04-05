import { MarginProperty } from '@styleaux/csstype';

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

export const createMargin = <
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

export const createMarginRule = <T = MarginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGIN, getValue: transformer})

export const margin =createMargin()

export const marginRule =createMarginRule()
