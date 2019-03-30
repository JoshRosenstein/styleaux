import { BorderImageOutsetProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGEOUTSET='borderImageOutset'

export interface IBorderImageOutsetProps<T> {
  /**
   * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset: T;
}

export const borderImageOutset = <
  T = BorderImageOutsetProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageOutsetProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGEOUTSET,
    prop: BORDERIMAGEOUTSET,
    alias,
    key,
    transformValue,
  })

export const borderImageOutsetRule = <T = BorderImageOutsetProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGEOUTSET, getValue: transformer})
