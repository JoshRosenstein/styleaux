import { FlexFlowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLEXFLOW='flexFlow'

export interface FlexFlowProps<T=FlexFlowProperty> {
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrp` properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  [FLEXFLOW]: T;
}

export const createFlexFlow = <
  T = FlexFlowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexFlowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexFlowProps<T>,Theme,Media>({
    cssProp:FLEXFLOW,
    prop:FLEXFLOW,
    key,
    transformValue,
  })

export const createFlexFlowRule = <T = FlexFlowProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FLEXFLOW, getValue: transformer})

export const flexFlow =createFlexFlow()

export const flexFlowRule =createFlexFlowRule()
