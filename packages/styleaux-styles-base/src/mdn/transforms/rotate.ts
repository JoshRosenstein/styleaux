import { RotateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ROTATE='rotate'

export interface IRotateProps<T> {
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate: T;
}

export const createRotate = <
  T = RotateProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IRotateProps<T>, Theme, Breakpoints>({
    cssProp: ROTATE,
    prop: ROTATE,
    alias,
    key,
    transformValue,
  })

export const createRotateRule = <T = RotateProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ROTATE, getValue: transformer})

export const rotate =createRotate()

export const rotateRule =createRotateRule()
