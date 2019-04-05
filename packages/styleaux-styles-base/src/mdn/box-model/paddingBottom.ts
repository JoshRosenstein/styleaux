import { PaddingBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGBOTTOM='paddingBottom'

export interface IPaddingBottomProps<T> {
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom: T;
}

export const createPaddingBottom = <
  T = PaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGBOTTOM,
    prop: PADDINGBOTTOM,
    alias,
    key,
    transformValue,
  })

export const createPaddingBottomRule = <T = PaddingBottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGBOTTOM, getValue: transformer})

export const paddingBottom =createPaddingBottom()

export const paddingBottomRule =createPaddingBottomRule()
