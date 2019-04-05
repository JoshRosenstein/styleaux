import { BorderImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGE='borderImage'

export interface IBorderImageProps<T> {
  /**
   * The **`border-image`** CSS property draws an image in place of an element's `border-style`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage: T;
}

export const createBorderImage = <
  T = BorderImageProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGE,
    prop: BORDERIMAGE,
    alias,
    key,
    transformValue,
  })

export const createBorderImageRule = <T = BorderImageProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGE, getValue: transformer})

export const borderImage =createBorderImage()

export const borderImageRule =createBorderImageRule()
