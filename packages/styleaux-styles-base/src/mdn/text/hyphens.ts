import { HyphensProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const HYPHENS='hyphens'

export interface IHyphensProps<T> {
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens: T;
}

export const hyphens = <
  T = HyphensProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IHyphensProps<T>, Theme, Breakpoints>({
    cssProp: HYPHENS,
    prop: HYPHENS,
    alias,
    key,
    transformValue,
  })

export const hyphensRule = <T = HyphensProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: HYPHENS, getValue: transformer})
