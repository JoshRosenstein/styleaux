import { MinWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MINWIDTH='minWidth'

export interface IMinWidthProps<T> {
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth: T;
}

export const minWidth = <
  T = MinWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMinWidthProps<T>, Theme, Breakpoints>({
    cssProp: MINWIDTH,
    prop: MINWIDTH,
    alias,
    key,
    transformValue,
  })

export const minWidthRule = <T = MinWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MINWIDTH, getValue: transformer})
