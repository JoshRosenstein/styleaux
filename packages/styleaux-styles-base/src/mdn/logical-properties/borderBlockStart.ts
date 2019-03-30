import { BorderBlockStartProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKSTART='borderBlockStart'

export interface IBorderBlockStartProps<T> {
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart: T;
}

export const borderBlockStart = <
  T = BorderBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKSTART,
    prop: BORDERBLOCKSTART,
    alias,
    key,
    transformValue,
  })

export const borderBlockStartRule = <T = BorderBlockStartProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKSTART, getValue: transformer})
