import { OutlineWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OUTLINEWIDTH='outlineWidth'

export interface IOutlineWidthProps<T> {
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth: T;
}

export const createOutlineWidth = <
  T = OutlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOutlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: OUTLINEWIDTH,
    prop: OUTLINEWIDTH,
    alias,
    key,
    transformValue,
  })

export const createOutlineWidthRule = <T = OutlineWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINEWIDTH, getValue: transformer})

export const outlineWidth =createOutlineWidth()

export const outlineWidthRule =createOutlineWidthRule()
