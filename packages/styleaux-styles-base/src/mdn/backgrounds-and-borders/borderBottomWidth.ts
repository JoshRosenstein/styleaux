import { BorderBottomWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBOTTOMWIDTH='borderBottomWidth'

export interface IBorderBottomWidthProps<T> {
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth: T;
}

export const createBorderBottomWidth = <
  T = BorderBottomWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBottomWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBOTTOMWIDTH,
    prop: BORDERBOTTOMWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderBottomWidthRule = <T = BorderBottomWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBOTTOMWIDTH, getValue: transformer})

export const borderBottomWidth =createBorderBottomWidth()

export const borderBottomWidthRule =createBorderBottomWidthRule()
