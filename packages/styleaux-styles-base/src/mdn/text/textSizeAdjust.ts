import { TextSizeAdjustProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTSIZEADJUST='textSizeAdjust'

export interface ITextSizeAdjustProps<T> {
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust: T;
}

export const createTextSizeAdjust = <
  T = TextSizeAdjustProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextSizeAdjustProps<T>, Theme, Breakpoints>({
    cssProp: TEXTSIZEADJUST,
    prop: TEXTSIZEADJUST,
    alias,
    key,
    transformValue,
  })

export const createTextSizeAdjustRule = <T = TextSizeAdjustProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTSIZEADJUST, getValue: transformer})

export const textSizeAdjust =createTextSizeAdjust()

export const textSizeAdjustRule =createTextSizeAdjustRule()
