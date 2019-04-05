import { ColorAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLORADJUST='colorAdjust'

export interface IColorAdjustProps<T> {
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  colorAdjust: T;
}

export const createColorAdjust = <
  T = ColorAdjustProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColorAdjustProps<T>, Theme, Breakpoints>({
    cssProp: COLORADJUST,
    prop: COLORADJUST,
    alias,
    key,
    transformValue,
  })

export const createColorAdjustRule = <T = ColorAdjustProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLORADJUST, getValue: transformer})

export const colorAdjust =createColorAdjust()

export const colorAdjustRule =createColorAdjustRule()
