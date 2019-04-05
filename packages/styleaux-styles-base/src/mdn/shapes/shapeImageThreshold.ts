import { ShapeImageThresholdProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SHAPEIMAGETHRESHOLD='shapeImageThreshold'

export interface IShapeImageThresholdProps<T> {
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold: T;
}

export const createShapeImageThreshold = <
  T = ShapeImageThresholdProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IShapeImageThresholdProps<T>, Theme, Breakpoints>({
    cssProp: SHAPEIMAGETHRESHOLD,
    prop: SHAPEIMAGETHRESHOLD,
    alias,
    key,
    transformValue,
  })

export const createShapeImageThresholdRule = <T = ShapeImageThresholdProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SHAPEIMAGETHRESHOLD, getValue: transformer})

export const shapeImageThreshold =createShapeImageThreshold()

export const shapeImageThresholdRule =createShapeImageThresholdRule()
