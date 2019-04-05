import { BorderLeftWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERLEFTWIDTH='borderLeftWidth'

export interface IBorderLeftWidthProps<T> {
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth: T;
}

export const createBorderLeftWidth = <
  T = BorderLeftWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderLeftWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERLEFTWIDTH,
    prop: BORDERLEFTWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderLeftWidthRule = <T = BorderLeftWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERLEFTWIDTH, getValue: transformer})

export const borderLeftWidth =createBorderLeftWidth()

export const borderLeftWidthRule =createBorderLeftWidthRule()
