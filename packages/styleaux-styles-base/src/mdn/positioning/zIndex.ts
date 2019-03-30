import { ZIndexProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ZINDEX='zIndex'

export interface IZIndexProps<T> {
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex: T;
}

export const zIndex = <
  T = ZIndexProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IZIndexProps<T>, Theme, Breakpoints>({
    cssProp: ZINDEX,
    prop: ZINDEX,
    alias,
    key,
    transformValue,
  })

export const zIndexRule = <T = ZIndexProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ZINDEX, getValue: transformer})
