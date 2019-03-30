import { RightProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const RIGHT='right'

export interface IRightProps<T> {
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right: T;
}

export const right = <
  T = RightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IRightProps<T>, Theme, Breakpoints>({
    cssProp: RIGHT,
    prop: RIGHT,
    alias,
    key,
    transformValue,
  })

export const rightRule = <T = RightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: RIGHT, getValue: transformer})
