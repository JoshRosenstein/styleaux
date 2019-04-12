import { TransformStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TRANSFORMSTYLE='transformStyle'

export interface TransformStyleProps<T=TransformStyleProperty> {
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  [TRANSFORMSTYLE]: T;
}

export const createTransformStyle = <
  T = TransformStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransformStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransformStyleProps<T>,Theme,Media>({
    cssProp:TRANSFORMSTYLE,
    prop:TRANSFORMSTYLE,
    key,
    transformValue,
  })

export const createTransformStyleRule = <T = TransformStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TRANSFORMSTYLE, getValue: transformer})

export const transformStyle =createTransformStyle()

export const transformStyleRule =createTransformStyleRule()
