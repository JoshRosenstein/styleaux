import { FloatProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLOAT='float'

export interface IFloatProps<T> {
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float: T;
}

export const float = <
  T = FloatProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFloatProps<T>, Theme, Breakpoints>({
    cssProp: FLOAT,
    prop: FLOAT,
    alias,
    key,
    transformValue,
  })

export const floatRule = <T = FloatProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLOAT, getValue: transformer})
