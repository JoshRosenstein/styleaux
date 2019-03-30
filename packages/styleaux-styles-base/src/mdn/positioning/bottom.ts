import { BottomProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BOTTOM='bottom'

export interface IBottomProps<T> {
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom: T;
}

export const bottom = <
  T = BottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBottomProps<T>, Theme, Breakpoints>({
    cssProp: BOTTOM,
    prop: BOTTOM,
    alias,
    key,
    transformValue,
  })

export const bottomRule = <T = BottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BOTTOM, getValue: transformer})
