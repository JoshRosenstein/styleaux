import { BorderBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKEND='borderBlockEnd'

export interface IBorderBlockEndProps<T> {
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd: T;
}

export const createBorderBlockEnd = <
  T = BorderBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKEND,
    prop: BORDERBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockEndRule = <T = BorderBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKEND, getValue: transformer})

export const borderBlockEnd =createBorderBlockEnd()

export const borderBlockEndRule =createBorderBlockEndRule()
