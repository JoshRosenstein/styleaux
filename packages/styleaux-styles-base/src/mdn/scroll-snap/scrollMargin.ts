import { ScrollMarginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGIN='scrollMargin'

export interface IScrollMarginProps<T> {
  /**
   * The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  scrollMargin: T;
}

export const createScrollMargin = <
  T = ScrollMarginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGIN,
    prop: SCROLLMARGIN,
    alias,
    key,
    transformValue,
  })

export const createScrollMarginRule = <T = ScrollMarginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGIN, getValue: transformer})

export const scrollMargin =createScrollMargin()

export const scrollMarginRule =createScrollMarginRule()
