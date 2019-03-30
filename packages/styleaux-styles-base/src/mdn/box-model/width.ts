import { WidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WIDTH='width'

export interface IWidthProps<T> {
  /**
   * The **`width`** CSS property sets an element's width. By default it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width: T;
}

export const width = <
  T = WidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWidthProps<T>, Theme, Breakpoints>({
    cssProp: WIDTH,
    prop: WIDTH,
    alias,
    key,
    transformValue,
  })

export const widthRule = <T = WidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WIDTH, getValue: transformer})
