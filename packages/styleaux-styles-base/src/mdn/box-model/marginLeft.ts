import { MarginLeftProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINLEFT='marginLeft'

export interface IMarginLeftProps<T> {
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft: T;
}

export const marginLeft = <
  T = MarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: MARGINLEFT,
    prop: MARGINLEFT,
    alias,
    key,
    transformValue,
  })

export const marginLeftRule = <T = MarginLeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINLEFT, getValue: transformer})
