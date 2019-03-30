import { ResizeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const RESIZE='resize'

export interface IResizeProps<T> {
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize: T;
}

export const resize = <
  T = ResizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IResizeProps<T>, Theme, Breakpoints>({
    cssProp: RESIZE,
    prop: RESIZE,
    alias,
    key,
    transformValue,
  })

export const resizeRule = <T = ResizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: RESIZE, getValue: transformer})
