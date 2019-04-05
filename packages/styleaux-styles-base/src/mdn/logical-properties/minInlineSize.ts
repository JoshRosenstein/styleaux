import { MinInlineSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MININLINESIZE='minInlineSize'

export interface IMinInlineSizeProps<T> {
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize: T;
}

export const createMinInlineSize = <
  T = MinInlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMinInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: MININLINESIZE,
    prop: MININLINESIZE,
    alias,
    key,
    transformValue,
  })

export const createMinInlineSizeRule = <T = MinInlineSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MININLINESIZE, getValue: transformer})

export const minInlineSize =createMinInlineSize()

export const minInlineSizeRule =createMinInlineSizeRule()
