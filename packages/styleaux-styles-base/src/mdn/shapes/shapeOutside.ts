import { ShapeOutsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SHAPEOUTSIDE='shapeOutside'

export interface ShapeOutsideProps<T=ShapeOutsideProperty> {
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  [SHAPEOUTSIDE]: T;
}

export const createShapeOutside = <
  T = ShapeOutsideProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ShapeOutsideProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ShapeOutsideProps<T>,Theme,Media>({
    cssProp:SHAPEOUTSIDE,
    prop:SHAPEOUTSIDE,
    key,
    transformValue,
  })

export const createShapeOutsideRule = <T = ShapeOutsideProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SHAPEOUTSIDE, getValue: transformer})

export const shapeOutside =createShapeOutside()

export const shapeOutsideRule =createShapeOutsideRule()
