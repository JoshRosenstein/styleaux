import { BorderWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERWIDTH='borderWidth'

export interface IBorderWidthProps<T> {
  /**
   * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth: T;
}

export const borderWidth = <
  T = BorderWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERWIDTH,
    prop: BORDERWIDTH,
    alias,
    key,
    transformValue,
  })

export const borderWidthRule = <T = BorderWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERWIDTH, getValue: transformer})
