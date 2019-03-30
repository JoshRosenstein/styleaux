import { BorderBlockProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCK='borderBlock'

export interface IBorderBlockProps<T> {
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  borderBlock: T;
}

export const borderBlock = <
  T = BorderBlockProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCK,
    prop: BORDERBLOCK,
    alias,
    key,
    transformValue,
  })

export const borderBlockRule = <T = BorderBlockProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCK, getValue: transformer})
