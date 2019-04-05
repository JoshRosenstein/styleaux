import { ScaleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCALE='scale'

export interface IScaleProps<T> {
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale: T;
}

export const createScale = <
  T = ScaleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScaleProps<T>, Theme, Breakpoints>({
    cssProp: SCALE,
    prop: SCALE,
    alias,
    key,
    transformValue,
  })

export const createScaleRule = <T = ScaleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCALE, getValue: transformer})

export const scale =createScale()

export const scaleRule =createScaleRule()
