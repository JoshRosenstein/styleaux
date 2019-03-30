import { ColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLOR='color'

export interface IColorProps<T> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color: T;
}

export const color = <
  T = ColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColorProps<T>, Theme, Breakpoints>({
    cssProp: COLOR,
    prop: COLOR,
    alias,
    key,
    transformValue,
  })

export const colorRule = <T = ColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLOR, getValue: transformer})