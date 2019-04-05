import { PaddingRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGRIGHT='paddingRight'

export interface IPaddingRightProps<T> {
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight: T;
}

export const createPaddingRight = <
  T = PaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGRIGHT,
    prop: PADDINGRIGHT,
    alias,
    key,
    transformValue,
  })

export const createPaddingRightRule = <T = PaddingRightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGRIGHT, getValue: transformer})

export const paddingRight =createPaddingRight()

export const paddingRightRule =createPaddingRightRule()
