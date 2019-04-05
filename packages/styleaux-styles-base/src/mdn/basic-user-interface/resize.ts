import { ResizeProperty } from '@styleaux/csstype';

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

export const createResize = <
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

export const createResizeRule = <T = ResizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: RESIZE, getValue: transformer})

export const resize =createResize()

export const resizeRule =createResizeRule()
