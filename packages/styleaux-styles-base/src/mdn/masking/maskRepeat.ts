import { MaskRepeatProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKREPEAT='maskRepeat'

export interface IMaskRepeatProps<T> {
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat: T;
}

export const maskRepeat = <
  T = MaskRepeatProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskRepeatProps<T>, Theme, Breakpoints>({
    cssProp: MASKREPEAT,
    prop: MASKREPEAT,
    alias,
    key,
    transformValue,
  })

export const maskRepeatRule = <T = MaskRepeatProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKREPEAT, getValue: transformer})
