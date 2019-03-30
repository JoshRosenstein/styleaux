import { BorderImageSourceProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGESOURCE='borderImageSource'

export interface IBorderImageSourceProps<T> {
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource: T;
}

export const borderImageSource = <
  T = BorderImageSourceProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageSourceProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGESOURCE,
    prop: BORDERIMAGESOURCE,
    alias,
    key,
    transformValue,
  })

export const borderImageSourceRule = <T = BorderImageSourceProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGESOURCE, getValue: transformer})
