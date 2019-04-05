import { FlexDirectionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXDIRECTION='flexDirection'

export interface IFlexDirectionProps<T> {
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection: T;
}

export const createFlexDirection = <
  T = FlexDirectionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexDirectionProps<T>, Theme, Breakpoints>({
    cssProp: FLEXDIRECTION,
    prop: FLEXDIRECTION,
    alias,
    key,
    transformValue,
  })

export const createFlexDirectionRule = <T = FlexDirectionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXDIRECTION, getValue: transformer})

export const flexDirection =createFlexDirection()

export const flexDirectionRule =createFlexDirectionRule()
