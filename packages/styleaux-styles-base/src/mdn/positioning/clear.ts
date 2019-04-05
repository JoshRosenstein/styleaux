import { ClearProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CLEAR='clear'

export interface IClearProps<T> {
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear: T;
}

export const createClear = <
  T = ClearProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IClearProps<T>, Theme, Breakpoints>({
    cssProp: CLEAR,
    prop: CLEAR,
    alias,
    key,
    transformValue,
  })

export const createClearRule = <T = ClearProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CLEAR, getValue: transformer})

export const clear =createClear()

export const clearRule =createClearRule()
