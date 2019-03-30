import { JustifySelfProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const JUSTIFYSELF='justifySelf'

export interface IJustifySelfProps<T> {
  /**
   * The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf: T;
}

export const justifySelf = <
  T = JustifySelfProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IJustifySelfProps<T>, Theme, Breakpoints>({
    cssProp: JUSTIFYSELF,
    prop: JUSTIFYSELF,
    alias,
    key,
    transformValue,
  })

export const justifySelfRule = <T = JustifySelfProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: JUSTIFYSELF, getValue: transformer})
