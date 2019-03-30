import { MarginBlockEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINBLOCKEND='marginBlockEnd'

export interface IMarginBlockEndProps<T> {
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd: T;
}

export const marginBlockEnd = <
  T = MarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: MARGINBLOCKEND,
    prop: MARGINBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const marginBlockEndRule = <T = MarginBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINBLOCKEND, getValue: transformer})
