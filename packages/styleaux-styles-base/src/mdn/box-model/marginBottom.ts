import { MarginBottomProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINBOTTOM='marginBottom'

export interface IMarginBottomProps<T> {
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom: T;
}

export const marginBottom = <
  T = MarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: MARGINBOTTOM,
    prop: MARGINBOTTOM,
    alias,
    key,
    transformValue,
  })

export const marginBottomRule = <T = MarginBottomProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINBOTTOM, getValue: transformer})
