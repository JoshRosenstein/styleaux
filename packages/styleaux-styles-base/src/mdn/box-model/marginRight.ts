import { MarginRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINRIGHT='marginRight'

export interface IMarginRightProps<T> {
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight: T;
}

export const createMarginRight = <
  T = MarginRightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginRightProps<T>, Theme, Breakpoints>({
    cssProp: MARGINRIGHT,
    prop: MARGINRIGHT,
    alias,
    key,
    transformValue,
  })

export const createMarginRightRule = <T = MarginRightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINRIGHT, getValue: transformer})

export const marginRight =createMarginRight()

export const marginRightRule =createMarginRightRule()
