import { BoxSizingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BOXSIZING='boxSizing'

export interface IBoxSizingProps<T> {
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing: T;
}

export const boxSizing = <
  T = BoxSizingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBoxSizingProps<T>, Theme, Breakpoints>({
    cssProp: BOXSIZING,
    prop: BOXSIZING,
    alias,
    key,
    transformValue,
  })

export const boxSizingRule = <T = BoxSizingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BOXSIZING, getValue: transformer})
