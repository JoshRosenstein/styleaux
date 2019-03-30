import { FlexDirectionProperty } from '@roseys/csstype';

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

export const flexDirection = <
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

export const flexDirectionRule = <T = FlexDirectionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXDIRECTION, getValue: transformer})
