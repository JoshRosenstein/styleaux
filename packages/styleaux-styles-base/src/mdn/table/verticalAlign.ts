import { VerticalAlignProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const VERTICALALIGN='verticalAlign'

export interface IVerticalAlignProps<T> {
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign: T;
}

export const createVerticalAlign = <
  T = VerticalAlignProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IVerticalAlignProps<T>, Theme, Breakpoints>({
    cssProp: VERTICALALIGN,
    prop: VERTICALALIGN,
    alias,
    key,
    transformValue,
  })

export const createVerticalAlignRule = <T = VerticalAlignProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: VERTICALALIGN, getValue: transformer})

export const verticalAlign =createVerticalAlign()

export const verticalAlignRule =createVerticalAlignRule()
