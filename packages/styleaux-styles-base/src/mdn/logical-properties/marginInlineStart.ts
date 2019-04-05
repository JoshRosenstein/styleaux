import { MarginInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGININLINESTART='marginInlineStart'

export interface IMarginInlineStartProps<T> {
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart: T;
}

export const createMarginInlineStart = <
  T = MarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: MARGININLINESTART,
    prop: MARGININLINESTART,
    alias,
    key,
    transformValue,
  })

export const createMarginInlineStartRule = <T = MarginInlineStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGININLINESTART, getValue: transformer})

export const marginInlineStart =createMarginInlineStart()

export const marginInlineStartRule =createMarginInlineStartRule()
