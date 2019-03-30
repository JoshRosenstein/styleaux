import { MarginInlineEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGININLINEEND='marginInlineEnd'

export interface IMarginInlineEndProps<T> {
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd: T;
}

export const marginInlineEnd = <
  T = MarginInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: MARGININLINEEND,
    prop: MARGININLINEEND,
    alias,
    key,
    transformValue,
  })

export const marginInlineEndRule = <T = MarginInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGININLINEEND, getValue: transformer})
