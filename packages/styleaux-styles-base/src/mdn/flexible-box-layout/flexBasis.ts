import { FlexBasisProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXBASIS='flexBasis'

export interface IFlexBasisProps<T> {
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis: T;
}

export const flexBasis = <
  T = FlexBasisProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexBasisProps<T>, Theme, Breakpoints>({
    cssProp: FLEXBASIS,
    prop: FLEXBASIS,
    alias,
    key,
    transformValue,
  })

export const flexBasisRule = <T = FlexBasisProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXBASIS, getValue: transformer})
