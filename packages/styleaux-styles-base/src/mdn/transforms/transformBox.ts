import { TransformBoxProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSFORMBOX='transformBox'

export interface ITransformBoxProps<T> {
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox: T;
}

export const transformBox = <
  T = TransformBoxProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransformBoxProps<T>, Theme, Breakpoints>({
    cssProp: TRANSFORMBOX,
    prop: TRANSFORMBOX,
    alias,
    key,
    transformValue,
  })

export const transformBoxRule = <T = TransformBoxProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSFORMBOX, getValue: transformer})
