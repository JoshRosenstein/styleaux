import { MarginInlineProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGININLINE='marginInline'

export interface IMarginInlineProps<T> {
  /**
   * The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  marginInline: T;
}

export const marginInline = <
  T = MarginInlineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginInlineProps<T>, Theme, Breakpoints>({
    cssProp: MARGININLINE,
    prop: MARGININLINE,
    alias,
    key,
    transformValue,
  })

export const marginInlineRule = <T = MarginInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGININLINE, getValue: transformer})
