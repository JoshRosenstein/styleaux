import { PaddingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDING='padding'

export interface IPaddingProps<T> {
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding: T;
}

export const padding = <
  T = PaddingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingProps<T>, Theme, Breakpoints>({
    cssProp: PADDING,
    prop: PADDING,
    alias,
    key,
    transformValue,
  })

export const paddingRule = <T = PaddingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDING, getValue: transformer})
