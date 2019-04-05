import { LeftProperty } from '@styleaux/csstype';

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

export const createLeft = <
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

export const createLeftRule = <T = LeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LEFT, getValue: transformer})

export const left =createLeft()

export const leftRule =createLeftRule()
