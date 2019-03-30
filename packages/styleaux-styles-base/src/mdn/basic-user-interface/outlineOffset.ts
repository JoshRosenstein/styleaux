import { OutlineOffsetProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OUTLINEOFFSET='outlineOffset'

export interface IOutlineOffsetProps<T> {
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset: T;
}

export const outlineOffset = <
  T = OutlineOffsetProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOutlineOffsetProps<T>, Theme, Breakpoints>({
    cssProp: OUTLINEOFFSET,
    prop: OUTLINEOFFSET,
    alias,
    key,
    transformValue,
  })

export const outlineOffsetRule = <T = OutlineOffsetProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINEOFFSET, getValue: transformer})
