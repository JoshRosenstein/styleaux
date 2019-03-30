import { BorderTopWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERTOPWIDTH='borderTopWidth'

export interface IBorderTopWidthProps<T> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth: T;
}

export const borderTopWidth = <
  T = BorderTopWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderTopWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERTOPWIDTH,
    prop: BORDERTOPWIDTH,
    alias,
    key,
    transformValue,
  })

export const borderTopWidthRule = <T = BorderTopWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERTOPWIDTH, getValue: transformer})
