import { FlexBasisProperty } from '@styleaux/csstype';

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

export const createFlexBasis = <
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

export const createFlexBasisRule = <T = FlexBasisProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXBASIS, getValue: transformer})

export const flexBasis =createFlexBasis()

export const flexBasisRule =createFlexBasisRule()
