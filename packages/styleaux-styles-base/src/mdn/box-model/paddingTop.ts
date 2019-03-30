import { PaddingTopProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGTOP='paddingTop'

export interface IPaddingTopProps<T> {
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop: T;
}

export const paddingTop = <
  T = PaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGTOP,
    prop: PADDINGTOP,
    alias,
    key,
    transformValue,
  })

export const paddingTopRule = <T = PaddingTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGTOP, getValue: transformer})
