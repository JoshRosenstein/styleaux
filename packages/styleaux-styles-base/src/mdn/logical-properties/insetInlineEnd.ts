import { InsetInlineEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const INSETINLINEEND='insetInlineEnd'

export interface IInsetInlineEndProps<T> {
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd: T;
}

export const insetInlineEnd = <
  T = InsetInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IInsetInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: INSETINLINEEND,
    prop: INSETINLINEEND,
    alias,
    key,
    transformValue,
  })

export const insetInlineEndRule = <T = InsetInlineEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: INSETINLINEEND, getValue: transformer})
