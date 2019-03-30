import { LeftProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LEFT='left'

export interface ILeftProps<T> {
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left: T;
}

export const left = <
  T = LeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ILeftProps<T>, Theme, Breakpoints>({
    cssProp: LEFT,
    prop: LEFT,
    alias,
    key,
    transformValue,
  })

export const leftRule = <T = LeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LEFT, getValue: transformer})
