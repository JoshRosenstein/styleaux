import { TransformOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSFORMORIGIN='transformOrigin'

export interface TransformOriginProps<T=TransformOriginProperty> {
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  [TRANSFORMORIGIN]: T;
}

export const createTransformOrigin = <
  T = TransformOriginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransformOriginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransformOriginProps<T>,Theme,Media>({
    cssProp:TRANSFORMORIGIN,
    prop:TRANSFORMORIGIN,
    key,
    transformValue,
  })

export const createTransformOriginRule = <T = TransformOriginProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TRANSFORMORIGIN, getValue: transformer})

export const transformOrigin =createTransformOrigin()

export const transformOriginRule =createTransformOriginRule()
