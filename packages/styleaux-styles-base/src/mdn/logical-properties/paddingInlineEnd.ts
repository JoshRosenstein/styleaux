import { PaddingInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGINLINEEND='paddingInlineEnd'

export interface IPaddingInlineEndProps<T> {
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd: T;
}

export const createPaddingInlineEnd = <
  T = PaddingInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGINLINEEND,
    prop: PADDINGINLINEEND,
    alias,
    key,
    transformValue,
  })

export const createPaddingInlineEndRule = <T = PaddingInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGINLINEEND, getValue: transformer})

export const paddingInlineEnd =createPaddingInlineEnd()

export const paddingInlineEndRule =createPaddingInlineEndRule()
