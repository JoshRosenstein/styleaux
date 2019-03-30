import { MaxInlineSizeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MAXINLINESIZE='maxInlineSize'

export interface IMaxInlineSizeProps<T> {
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize: T;
}

export const maxInlineSize = <
  T = MaxInlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaxInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: MAXINLINESIZE,
    prop: MAXINLINESIZE,
    alias,
    key,
    transformValue,
  })

export const maxInlineSizeRule = <T = MaxInlineSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MAXINLINESIZE, getValue: transformer})
