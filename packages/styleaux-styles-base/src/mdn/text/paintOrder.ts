import { PaintOrderProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PAINTORDER='paintOrder'

export interface IPaintOrderProps<T> {
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder: T;
}

export const paintOrder = <
  T = PaintOrderProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaintOrderProps<T>, Theme, Breakpoints>({
    cssProp: PAINTORDER,
    prop: PAINTORDER,
    alias,
    key,
    transformValue,
  })

export const paintOrderRule = <T = PaintOrderProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PAINTORDER, getValue: transformer})
