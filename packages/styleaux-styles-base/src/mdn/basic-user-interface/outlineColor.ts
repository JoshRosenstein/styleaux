import { OutlineColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OUTLINECOLOR='outlineColor'

export interface IOutlineColorProps<T> {
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor: T;
}

export const outlineColor = <
  T = OutlineColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOutlineColorProps<T>, Theme, Breakpoints>({
    cssProp: OUTLINECOLOR,
    prop: OUTLINECOLOR,
    alias,
    key,
    transformValue,
  })

export const outlineColorRule = <T = OutlineColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINECOLOR, getValue: transformer})
