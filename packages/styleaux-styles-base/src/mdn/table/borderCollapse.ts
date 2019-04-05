import { BorderCollapseProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERCOLLAPSE='borderCollapse'

export interface IBorderCollapseProps<T> {
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse: T;
}

export const createBorderCollapse = <
  T = BorderCollapseProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderCollapseProps<T>, Theme, Breakpoints>({
    cssProp: BORDERCOLLAPSE,
    prop: BORDERCOLLAPSE,
    alias,
    key,
    transformValue,
  })

export const createBorderCollapseRule = <T = BorderCollapseProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERCOLLAPSE, getValue: transformer})

export const borderCollapse =createBorderCollapse()

export const borderCollapseRule =createBorderCollapseRule()
