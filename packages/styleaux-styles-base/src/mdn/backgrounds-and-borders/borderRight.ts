import { BorderRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERRIGHT='borderRight'

export interface IBorderRightProps<T> {
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight: T;
}

export const createBorderRight = <
  T = BorderRightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderRightProps<T>, Theme, Breakpoints>({
    cssProp: BORDERRIGHT,
    prop: BORDERRIGHT,
    alias,
    key,
    transformValue,
  })

export const createBorderRightRule = <T = BorderRightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERRIGHT, getValue: transformer})

export const borderRight =createBorderRight()

export const borderRightRule =createBorderRightRule()
