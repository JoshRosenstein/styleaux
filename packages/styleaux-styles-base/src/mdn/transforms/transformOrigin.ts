import { TransformOriginProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSFORMORIGIN='transformOrigin'

export interface ITransformOriginProps<T> {
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin: T;
}

export const transformOrigin = <
  T = TransformOriginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransformOriginProps<T>, Theme, Breakpoints>({
    cssProp: TRANSFORMORIGIN,
    prop: TRANSFORMORIGIN,
    alias,
    key,
    transformValue,
  })

export const transformOriginRule = <T = TransformOriginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSFORMORIGIN, getValue: transformer})
