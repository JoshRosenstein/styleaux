import { MarginBlockStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINBLOCKSTART='marginBlockStart'

export interface IMarginBlockStartProps<T> {
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart: T;
}

export const marginBlockStart = <
  T = MarginBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: MARGINBLOCKSTART,
    prop: MARGINBLOCKSTART,
    alias,
    key,
    transformValue,
  })

export const marginBlockStartRule = <T = MarginBlockStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINBLOCKSTART, getValue: transformer})
