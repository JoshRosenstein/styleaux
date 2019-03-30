import { MarginTopProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINTOP='marginTop'

export interface IMarginTopProps<T> {
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop: T;
}

export const marginTop = <
  T = MarginTopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginTopProps<T>, Theme, Breakpoints>({
    cssProp: MARGINTOP,
    prop: MARGINTOP,
    alias,
    key,
    transformValue,
  })

export const marginTopRule = <T = MarginTopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINTOP, getValue: transformer})
