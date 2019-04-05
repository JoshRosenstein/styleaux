import { MarginInlineProperty } from '@styleaux/csstype';

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

export const createMarginInline = <
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

export const createMarginInlineRule = <T = MarginInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGININLINE, getValue: transformer})

export const marginInline =createMarginInline()

export const marginInlineRule =createMarginInlineRule()
