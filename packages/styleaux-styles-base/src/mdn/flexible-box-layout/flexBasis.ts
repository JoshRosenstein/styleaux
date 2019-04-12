import { FlexBasisProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FLEXBASIS='flexBasis'

export interface FlexBasisProps<T=FlexBasisProperty> {
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  [FLEXBASIS]: T;
}

export const createFlexBasis = <
  T = FlexBasisProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexBasisProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexBasisProps<T>,Theme,Media>({
    cssProp:FLEXBASIS,
    prop:FLEXBASIS,
    key,
    transformValue,
  })

export const createFlexBasisRule = <T = FlexBasisProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FLEXBASIS, getValue: transformer})

export const flexBasis =createFlexBasis()

export const flexBasisRule =createFlexBasisRule()
