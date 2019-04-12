import { ScaleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCALE='scale'

export interface ScaleProps<T=ScaleProperty> {
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  [SCALE]: T;
}

export const createScale = <
  T = ScaleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScaleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScaleProps<T>,Theme,Media>({
    cssProp:SCALE,
    prop:SCALE,
    key,
    transformValue,
  })

export const createScaleRule = <T = ScaleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCALE, getValue: transformer})

export const scale =createScale()

export const scaleRule =createScaleRule()
