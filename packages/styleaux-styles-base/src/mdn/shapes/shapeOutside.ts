import { ShapeOutsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SHAPEOUTSIDE='shapeOutside'

export interface IShapeOutsideProps<T> {
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside: T;
}

export const createShapeOutside = <
  T = ShapeOutsideProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IShapeOutsideProps<T>, Theme, Breakpoints>({
    cssProp: SHAPEOUTSIDE,
    prop: SHAPEOUTSIDE,
    alias,
    key,
    transformValue,
  })

export const createShapeOutsideRule = <T = ShapeOutsideProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SHAPEOUTSIDE, getValue: transformer})

export const shapeOutside =createShapeOutside()

export const shapeOutsideRule =createShapeOutsideRule()
