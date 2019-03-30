import { TransformStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSFORMSTYLE='transformStyle'

export interface ITransformStyleProps<T> {
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle: T;
}

export const transformStyle = <
  T = TransformStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransformStyleProps<T>, Theme, Breakpoints>({
    cssProp: TRANSFORMSTYLE,
    prop: TRANSFORMSTYLE,
    alias,
    key,
    transformValue,
  })

export const transformStyleRule = <T = TransformStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSFORMSTYLE, getValue: transformer})
