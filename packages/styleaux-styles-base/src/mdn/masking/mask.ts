import { MaskProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASK='mask'

export interface IMaskProps<T> {
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask: T;
}

export const mask = <
  T = MaskProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskProps<T>, Theme, Breakpoints>({
    cssProp: MASK,
    prop: MASK,
    alias,
    key,
    transformValue,
  })

export const maskRule = <T = MaskProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASK, getValue: transformer})