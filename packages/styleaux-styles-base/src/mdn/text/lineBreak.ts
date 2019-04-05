import { LineBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LINEBREAK='lineBreak'

export interface ILineBreakProps<T> {
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak: T;
}

export const createLineBreak = <
  T = LineBreakProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ILineBreakProps<T>, Theme, Breakpoints>({
    cssProp: LINEBREAK,
    prop: LINEBREAK,
    alias,
    key,
    transformValue,
  })

export const createLineBreakRule = <T = LineBreakProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LINEBREAK, getValue: transformer})

export const lineBreak =createLineBreak()

export const lineBreakRule =createLineBreakRule()
