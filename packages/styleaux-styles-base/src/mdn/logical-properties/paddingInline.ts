import { PaddingInlineProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGINLINE='paddingInline'

export interface IPaddingInlineProps<T> {
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  paddingInline: T;
}

export const paddingInline = <
  T = PaddingInlineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingInlineProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGINLINE,
    prop: PADDINGINLINE,
    alias,
    key,
    transformValue,
  })

export const paddingInlineRule = <T = PaddingInlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGINLINE, getValue: transformer})
