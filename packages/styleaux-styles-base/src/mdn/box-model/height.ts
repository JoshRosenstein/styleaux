import { HeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const HEIGHT='height'

export interface IHeightProps<T> {
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height: T;
}

export const createHeight = <
  T = HeightProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IHeightProps<T>, Theme, Breakpoints>({
    cssProp: HEIGHT,
    prop: HEIGHT,
    alias,
    key,
    transformValue,
  })

export const createHeightRule = <T = HeightProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: HEIGHT, getValue: transformer})

export const height =createHeight()

export const heightRule =createHeightRule()
