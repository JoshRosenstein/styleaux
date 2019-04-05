import { WhiteSpaceProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WHITESPACE='whiteSpace'

export interface IWhiteSpaceProps<T> {
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace: T;
}

export const createWhiteSpace = <
  T = WhiteSpaceProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWhiteSpaceProps<T>, Theme, Breakpoints>({
    cssProp: WHITESPACE,
    prop: WHITESPACE,
    alias,
    key,
    transformValue,
  })

export const createWhiteSpaceRule = <T = WhiteSpaceProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WHITESPACE, getValue: transformer})

export const whiteSpace =createWhiteSpace()

export const whiteSpaceRule =createWhiteSpaceRule()
