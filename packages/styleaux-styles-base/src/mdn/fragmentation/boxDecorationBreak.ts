import { BoxDecorationBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BOXDECORATIONBREAK='boxDecorationBreak'

export interface IBoxDecorationBreakProps<T> {
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak: T;
}

export const createBoxDecorationBreak = <
  T = BoxDecorationBreakProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBoxDecorationBreakProps<T>, Theme, Breakpoints>({
    cssProp: BOXDECORATIONBREAK,
    prop: BOXDECORATIONBREAK,
    alias,
    key,
    transformValue,
  })

export const createBoxDecorationBreakRule = <T = BoxDecorationBreakProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BOXDECORATIONBREAK, getValue: transformer})

export const boxDecorationBreak =createBoxDecorationBreak()

export const boxDecorationBreakRule =createBoxDecorationBreakRule()
