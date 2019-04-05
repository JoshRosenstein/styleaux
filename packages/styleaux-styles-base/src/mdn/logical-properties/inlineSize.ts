import { InlineSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const INLINESIZE='inlineSize'

export interface IInlineSizeProps<T> {
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize: T;
}

export const createInlineSize = <
  T = InlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: INLINESIZE,
    prop: INLINESIZE,
    alias,
    key,
    transformValue,
  })

export const createInlineSizeRule = <T = InlineSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: INLINESIZE, getValue: transformer})

export const inlineSize =createInlineSize()

export const inlineSizeRule =createInlineSizeRule()
