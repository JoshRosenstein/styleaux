import { FlexFlowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXFLOW='flexFlow'

export interface IFlexFlowProps<T> {
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow: T;
}

export const createFlexFlow = <
  T = FlexFlowProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexFlowProps<T>, Theme, Breakpoints>({
    cssProp: FLEXFLOW,
    prop: FLEXFLOW,
    alias,
    key,
    transformValue,
  })

export const createFlexFlowRule = <T = FlexFlowProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXFLOW, getValue: transformer})

export const flexFlow =createFlexFlow()

export const flexFlowRule =createFlexFlowRule()
