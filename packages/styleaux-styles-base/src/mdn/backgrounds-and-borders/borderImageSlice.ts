import { BorderImageSliceProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGESLICE='borderImageSlice'

export interface IBorderImageSliceProps<T> {
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice: T;
}

export const borderImageSlice = <
  T = BorderImageSliceProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageSliceProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGESLICE,
    prop: BORDERIMAGESLICE,
    alias,
    key,
    transformValue,
  })

export const borderImageSliceRule = <T = BorderImageSliceProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGESLICE, getValue: transformer})
