import { ShapeMarginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SHAPEMARGIN='shapeMargin'

export interface ShapeMarginProps<T=ShapeMarginProperty> {
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  [SHAPEMARGIN]: T;
}

export const createShapeMargin = <
  T = ShapeMarginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ShapeMarginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ShapeMarginProps<T>,Theme,Media>({
    cssProp:SHAPEMARGIN,
    prop:SHAPEMARGIN,
    key,
    transformValue,
  })

export const createShapeMarginRule = <T = ShapeMarginProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: SHAPEMARGIN, getValue: transformer})

export const shapeMargin =createShapeMargin()

export const shapeMarginRule =createShapeMarginRule()
