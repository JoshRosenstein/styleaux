import { MaskOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKORIGIN='maskOrigin'

export interface IMaskOriginProps<T> {
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin: T;
}

export const createMaskOrigin = <
  T = MaskOriginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskOriginProps<T>, Theme, Breakpoints>({
    cssProp: MASKORIGIN,
    prop: MASKORIGIN,
    alias,
    key,
    transformValue,
  })

export const createMaskOriginRule = <T = MaskOriginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKORIGIN, getValue: transformer})

export const maskOrigin =createMaskOrigin()

export const maskOriginRule =createMaskOriginRule()
