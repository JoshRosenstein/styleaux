import { BoxShadowProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BOXSHADOW='boxShadow'

export interface IBoxShadowProps<T> {
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow: T;
}

export const boxShadow = <
  T = BoxShadowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBoxShadowProps<T>, Theme, Breakpoints>({
    cssProp: BOXSHADOW,
    prop: BOXSHADOW,
    alias,
    key,
    transformValue,
  })

export const boxShadowRule = <T = BoxShadowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BOXSHADOW, getValue: transformer})
