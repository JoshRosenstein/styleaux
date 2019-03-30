import { TextAlignProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTALIGN='textAlign'

export interface ITextAlignProps<T> {
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign: T;
}

export const textAlign = <
  T = TextAlignProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextAlignProps<T>, Theme, Breakpoints>({
    cssProp: TEXTALIGN,
    prop: TEXTALIGN,
    alias,
    key,
    transformValue,
  })

export const textAlignRule = <T = TextAlignProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTALIGN, getValue: transformer})
