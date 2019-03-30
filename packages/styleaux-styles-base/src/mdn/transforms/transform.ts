import { TransformProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSFORM='transform'

export interface ITransformProps<T> {
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform: T;
}

export const transform = <
  T = TransformProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransformProps<T>, Theme, Breakpoints>({
    cssProp: TRANSFORM,
    prop: TRANSFORM,
    alias,
    key,
    transformValue,
  })

export const transformRule = <T = TransformProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSFORM, getValue: transformer})
