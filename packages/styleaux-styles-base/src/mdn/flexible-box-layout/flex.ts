import { FlexProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEX='flex'

export interface IFlexProps<T> {
  /**
   * The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex: T;
}

export const createFlex = <
  T = FlexProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexProps<T>, Theme, Breakpoints>({
    cssProp: FLEX,
    prop: FLEX,
    alias,
    key,
    transformValue,
  })

export const createFlexRule = <T = FlexProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEX, getValue: transformer})

export const flex =createFlex()

export const flexRule =createFlexRule()
