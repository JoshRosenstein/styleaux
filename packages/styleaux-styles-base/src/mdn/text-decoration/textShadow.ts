import { TextShadowProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTSHADOW='textShadow'

export interface ITextShadowProps<T> {
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow: T;
}

export const textShadow = <
  T = TextShadowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextShadowProps<T>, Theme, Breakpoints>({
    cssProp: TEXTSHADOW,
    prop: TEXTSHADOW,
    alias,
    key,
    transformValue,
  })

export const textShadowRule = <T = TextShadowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTSHADOW, getValue: transformer})
