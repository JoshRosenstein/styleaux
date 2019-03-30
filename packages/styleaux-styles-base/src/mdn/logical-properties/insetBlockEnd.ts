import { InsetBlockEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const INSETBLOCKEND='insetBlockEnd'

export interface IInsetBlockEndProps<T> {
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd: T;
}

export const insetBlockEnd = <
  T = InsetBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IInsetBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: INSETBLOCKEND,
    prop: INSETBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const insetBlockEndRule = <T = InsetBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: INSETBLOCKEND, getValue: transformer})
