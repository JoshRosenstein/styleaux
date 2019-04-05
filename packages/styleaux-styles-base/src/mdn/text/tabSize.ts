import { TabSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TABSIZE='tabSize'

export interface ITabSizeProps<T> {
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize: T;
}

export const createTabSize = <
  T = TabSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITabSizeProps<T>, Theme, Breakpoints>({
    cssProp: TABSIZE,
    prop: TABSIZE,
    alias,
    key,
    transformValue,
  })

export const createTabSizeRule = <T = TabSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TABSIZE, getValue: transformer})

export const tabSize =createTabSize()

export const tabSizeRule =createTabSizeRule()
