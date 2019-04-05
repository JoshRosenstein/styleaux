import { BorderImageWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGEWIDTH='borderImageWidth'

export interface IBorderImageWidthProps<T> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth: T;
}

export const createBorderImageWidth = <
  T = BorderImageWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGEWIDTH,
    prop: BORDERIMAGEWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderImageWidthRule = <T = BorderImageWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGEWIDTH, getValue: transformer})

export const borderImageWidth =createBorderImageWidth()

export const borderImageWidthRule =createBorderImageWidthRule()
