import { PaddingInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGINLINESTART='paddingInlineStart'

export interface IPaddingInlineStartProps<T> {
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart: T;
}

export const createPaddingInlineStart = <
  T = PaddingInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGINLINESTART,
    prop: PADDINGINLINESTART,
    alias,
    key,
    transformValue,
  })

export const createPaddingInlineStartRule = <T = PaddingInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGINLINESTART, getValue: transformer})

export const paddingInlineStart =createPaddingInlineStart()

export const paddingInlineStartRule =createPaddingInlineStartRule()
