import { ShapeMarginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SHAPEMARGIN='shapeMargin'

export interface IShapeMarginProps<T> {
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin: T;
}

export const createShapeMargin = <
  T = ShapeMarginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IShapeMarginProps<T>, Theme, Breakpoints>({
    cssProp: SHAPEMARGIN,
    prop: SHAPEMARGIN,
    alias,
    key,
    transformValue,
  })

export const createShapeMarginRule = <T = ShapeMarginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SHAPEMARGIN, getValue: transformer})

export const shapeMargin =createShapeMargin()

export const shapeMarginRule =createShapeMarginRule()
