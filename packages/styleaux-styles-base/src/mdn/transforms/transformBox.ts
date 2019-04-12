import { TransformBoxProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TRANSFORMBOX='transformBox'

export interface TransformBoxProps<T=TransformBoxProperty> {
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  [TRANSFORMBOX]: T;
}

export const createTransformBox = <
  T = TransformBoxProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransformBoxProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransformBoxProps<T>,Theme,Media>({
    cssProp:TRANSFORMBOX,
    prop:TRANSFORMBOX,
    key,
    transformValue,
  })

export const createTransformBoxRule = <T = TransformBoxProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TRANSFORMBOX, getValue: transformer})

export const transformBox =createTransformBox()

export const transformBoxRule =createTransformBoxRule()
