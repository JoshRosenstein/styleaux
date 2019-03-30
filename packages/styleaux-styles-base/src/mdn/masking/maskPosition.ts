import { MaskPositionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKPOSITION='maskPosition'

export interface IMaskPositionProps<T> {
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition: T;
}

export const maskPosition = <
  T = MaskPositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskPositionProps<T>, Theme, Breakpoints>({
    cssProp: MASKPOSITION,
    prop: MASKPOSITION,
    alias,
    key,
    transformValue,
  })

export const maskPositionRule = <T = MaskPositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKPOSITION, getValue: transformer})
