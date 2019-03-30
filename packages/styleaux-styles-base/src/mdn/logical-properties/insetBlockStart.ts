import { InsetBlockStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const INSETBLOCKSTART='insetBlockStart'

export interface IInsetBlockStartProps<T> {
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  insetBlockStart: T;
}

export const insetBlockStart = <
  T = InsetBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IInsetBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: INSETBLOCKSTART,
    prop: INSETBLOCKSTART,
    alias,
    key,
    transformValue,
  })

export const insetBlockStartRule = <T = InsetBlockStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: INSETBLOCKSTART, getValue: transformer})
