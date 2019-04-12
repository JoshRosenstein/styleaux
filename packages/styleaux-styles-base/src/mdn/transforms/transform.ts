import { TransformProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TRANSFORM='transform'

export interface TransformProps<T=TransformProperty> {
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  [TRANSFORM]: T;
}

export const createTransform = <
  T = TransformProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransformProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransformProps<T>,Theme,Media>({
    cssProp:TRANSFORM,
    prop:TRANSFORM,
    key,
    transformValue,
  })

export const createTransformRule = <T = TransformProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TRANSFORM, getValue: transformer})

export const transform =createTransform()

export const transformRule =createTransformRule()
