import { PaddingTopProperty } from '@styleaux/csstype';

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

export const createPaddingTop = <
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

export const createPaddingTopRule = <T = PaddingTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGTOP, getValue: transformer})

export const paddingTop =createPaddingTop()

export const paddingTopRule =createPaddingTopRule()
