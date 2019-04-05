import { CursorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CURSOR='cursor'

export interface ICursorProps<T> {
  /**
   * The **`cursor`** CSS property sets mouse cursor to display when the mouse pointer is over an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor: T;
}

export const createCursor = <
  T = CursorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ICursorProps<T>, Theme, Breakpoints>({
    cssProp: CURSOR,
    prop: CURSOR,
    alias,
    key,
    transformValue,
  })

export const createCursorRule = <T = CursorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CURSOR, getValue: transformer})

export const cursor =createCursor()

export const cursorRule =createCursorRule()
