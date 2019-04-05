import { OffsetRotateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OFFSETROTATE='offsetRotate'

export interface IOffsetRotateProps<T> {
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate: T;
}

export const createOffsetRotate = <
  T = OffsetRotateProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOffsetRotateProps<T>, Theme, Breakpoints>({
    cssProp: OFFSETROTATE,
    prop: OFFSETROTATE,
    alias,
    key,
    transformValue,
  })

export const createOffsetRotateRule = <T = OffsetRotateProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OFFSETROTATE, getValue: transformer})

export const offsetRotate =createOffsetRotate()

export const offsetRotateRule =createOffsetRotateRule()
