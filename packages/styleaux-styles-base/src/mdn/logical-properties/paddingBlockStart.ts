import { PaddingBlockStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGBLOCKSTART='paddingBlockStart'

export interface IPaddingBlockStartProps<T> {
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart: T;
}

export const paddingBlockStart = <
  T = PaddingBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGBLOCKSTART,
    prop: PADDINGBLOCKSTART,
    alias,
    key,
    transformValue,
  })

export const paddingBlockStartRule = <T = PaddingBlockStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGBLOCKSTART, getValue: transformer})
