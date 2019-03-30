import { InsetInlineStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const INSETINLINESTART='insetInlineStart'

export interface IInsetInlineStartProps<T> {
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart: T;
}

export const insetInlineStart = <
  T = InsetInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IInsetInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: INSETINLINESTART,
    prop: INSETINLINESTART,
    alias,
    key,
    transformValue,
  })

export const insetInlineStartRule = <T = InsetInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: INSETINLINESTART, getValue: transformer})
