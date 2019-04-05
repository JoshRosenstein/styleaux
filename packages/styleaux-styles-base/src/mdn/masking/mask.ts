import { MaskProperty } from '@styleaux/csstype';

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

export const createMask = <
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

export const createMaskRule = <T = MaskProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASK, getValue: transformer})

export const mask =createMask()

export const maskRule =createMaskRule()
