import { BorderImageRepeatProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERIMAGEREPEAT='borderImageRepeat'

export interface IBorderImageRepeatProps<T> {
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat: T;
}

export const borderImageRepeat = <
  T = BorderImageRepeatProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderImageRepeatProps<T>, Theme, Breakpoints>({
    cssProp: BORDERIMAGEREPEAT,
    prop: BORDERIMAGEREPEAT,
    alias,
    key,
    transformValue,
  })

export const borderImageRepeatRule = <T = BorderImageRepeatProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERIMAGEREPEAT, getValue: transformer})
