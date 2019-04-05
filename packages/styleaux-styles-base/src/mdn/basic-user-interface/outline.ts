import { OutlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OUTLINE='outline'

export interface IOutlineProps<T> {
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline: T;
}

export const createOutline = <
  T = OutlineProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOutlineProps<T>, Theme, Breakpoints>({
    cssProp: OUTLINE,
    prop: OUTLINE,
    alias,
    key,
    transformValue,
  })

export const createOutlineRule = <T = OutlineProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINE, getValue: transformer})

export const outline =createOutline()

export const outlineRule =createOutlineRule()
